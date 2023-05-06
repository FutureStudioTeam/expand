"use strict";
/**
 * @author sky.li
 * @module DataChannelServer
 * @desc 数据通道服务server
 * */
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./socket/server");
const message_packer_1 = require("./message/message-packer");
const message_1 = require("./message");
const session_1 = require("./session");
class DataChannelServer {
    constructor(port, chs) {
        this._server = null;
        this._packer = new message_packer_1.MessagePacker();
        this._sessionMap = new Map(); // (clientId, session)
        this.readyPromise = null;
        this._channels = null;
        this._clientChannelMap = new Map(); // (clientId, channels)
        this._channels = chs;
        this._channels.onRecv((chId, data) => {
            for (let [clientId, channels] of this._clientChannelMap) {
                let sess = this._sessionMap.get(clientId);
                if (!sess) {
                    console.error(`client of ${clientId} no exist`);
                    setTimeout(() => {
                        this._clientChannelMap.delete(clientId);
                    });
                    continue;
                }
                if (channels.includes(chId)) {
                    sess.send([message_1.MSG_TAG.msg_recv, chId, ...data]);
                }
            }
        });
        this._server = new server_1.WsServer(port);
        this.readyPromise = this._server.readyPromise.then(() => {
            this._server.onRecv((comm) => {
                const id = comm.getId();
                let sess = this._sessionMap.get(id);
                if (!sess) {
                    sess = new session_1.MsgSession(comm);
                    comm.onClose(() => {
                        this._sessionMap.delete(id);
                        this._clientChannelMap.delete(id);
                    });
                    comm.onError(() => {
                        this._sessionMap.delete(id);
                        this._clientChannelMap.delete(id);
                    });
                    sess._packer.onUnpack((data) => {
                        this.onData(id, data);
                    });
                    this._sessionMap.set(id, sess);
                }
                sess.doRecv();
            });
        });
    }
    send(id, data) {
        const sess = this._sessionMap.get(id);
        if (!sess)
            return;
        sess.send(data);
    }
    onData(id, data) {
        if (data.length <= 1) {
            console.error('invalid message', data);
            return;
        }
        let type = data.shift();
        if (type == message_1.MSG_TAG.msg_send) {
            if (data.length <= 1) {
                console.error('invalid msg_send message', data);
                return;
            }
            let ch = data.shift();
            this._channels.send(ch, data);
        }
        else if (type == message_1.MSG_TAG.msg_reg) {
            if (data.length != 1) {
                console.error('invalid msg_reg message', data);
                return;
            }
            let ch = data[0];
            let chs = this._clientChannelMap.get(id);
            if (!chs) {
                chs = [];
                this._clientChannelMap.set(id, chs);
            }
            chs.push(ch);
        }
        else if (type == message_1.MSG_TAG.msg_unreg) {
            if (data.length != 1) {
                console.error('invalid msg_unreg message', data);
                return;
            }
            let ch = data[0];
            let chs = this._clientChannelMap.get(id);
            if (!chs) {
                console.error(`client of ${id} didn't reg channel`);
                return;
            }
            let nchs = chs.filter(c => c != ch);
            this._clientChannelMap.set(id, nchs);
        }
        else {
            console.error('invalid message type', type);
        }
    }
}
exports.DataChannelServer = DataChannelServer;
//# sourceMappingURL=data-channel-server.js.map