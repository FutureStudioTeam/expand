"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message_packer_1 = require("./message/message-packer");
class MsgSession {
    constructor(comm) {
        // 通信层
        this._comm = null;
        this._packer = new message_packer_1.MessagePacker();
        this._comm = comm;
    }
    // 触发接收数据，该方法可能触发_packer.onUnpack()
    doRecv() {
        const data = this._comm.getRecv();
        this._packer.feedBytes(data);
    }
    // 发送数据
    send(data) {
        let packedData = this._packer.pack(data);
        this._comm.send(packedData);
    }
}
exports.MsgSession = MsgSession;
//# sourceMappingURL=session.js.map