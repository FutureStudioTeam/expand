"use strict";
/**
 * @author sky.li
 * @module DataChannelClient
 * @desc 数据通道服务client
 * */
Object.defineProperty(exports, "__esModule", { value: true });
const message_packer_1 = require("./message/message-packer");
const client_1 = require("./socket/client");
const session_1 = require("./session");
class DataChannelClient {
    constructor(host, port) {
        this._client = null;
        this._packer = new message_packer_1.MessagePacker();
        this._session = null;
        this.readPromise = null;
        this._client = new client_1.WsClient(host, port);
        this.readPromise = this._client.readyPromise.then(() => {
            const comm = this._client.getComm();
            let sess = new session_1.MsgSession(comm);
            comm.onClose(() => {
            });
            comm.onError(() => {
            });
            comm.onRecv(() => {
                sess.doRecv();
            });
            sess._packer.onUnpack((data) => {
                this.onData(data);
            });
            this._session = sess;
        });
    }
    send(data) {
        this._session.send(data);
    }
    onData(data) {
        console.log('onData', data);
    }
}
exports.DataChannelClient = DataChannelClient;
//# sourceMappingURL=data-channel-client.js.map