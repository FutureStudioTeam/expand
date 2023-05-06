/**
 * @author sky.li
 * @module DataChannelServer
 * @desc 数据通道服务server
 * */

import { WsServer } from './socket/server'
import { MessagePacker } from './message/message-packer';
import { MSG_TAG } from './message'
import { MsgSession } from './session';
import { IDataChannels } from './data-channel';

export class DataChannelServer {
    _server: WsServer = null;
    _packer: MessagePacker = new MessagePacker();
    _sessionMap: Map<number, MsgSession> = new Map(); // (clientId, session)
    readyPromise: Promise<void> = null;
    _channels: IDataChannels = null;
    _clientChannelMap: Map<number, number[]> = new Map(); // (clientId, channels)
    constructor(port: number, chs: IDataChannels) {
        this._channels = chs;
        this._channels.onRecv((chId, data) => {
            for (let [clientId, channels] of this._clientChannelMap) {
                let sess = this._sessionMap.get(clientId);
                if (!sess) {
                    console.error(`client of ${clientId} no exist`);
                    setTimeout(() => {
                        this._clientChannelMap.delete(clientId);
                    })
                    continue;
                }
                if (channels.includes(chId)) {
                    sess.send([MSG_TAG.msg_recv, chId, ...data]);
                }
            }
        });
        this._server = new WsServer(port);
        this.readyPromise = this._server.readyPromise.then(() => {
            this._server.onRecv((comm) => {
                const id = comm.getId();
                let sess = this._sessionMap.get(id);
                if (!sess) {
                    sess = new MsgSession(comm)
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

    send(id: number, data: number[]): void {
        const sess = this._sessionMap.get(id);
        if (!sess) return;
        sess.send(data);
    }

    onData(id: number, data: number[]) {
        if (data.length <= 1) {
            console.error('invalid message', data);
            return;
        }
        let type = data.shift();
        if (type == MSG_TAG.msg_send) {
            if (data.length <= 1) {
                console.error('invalid msg_send message', data);
                return;
            }
            let ch = data.shift();
            this._channels.send(ch, data);
        } else if (type == MSG_TAG.msg_reg) {
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
        } else if (type == MSG_TAG.msg_unreg) {
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
        } else {
            console.error('invalid message type', type);
        }
    }
}
