/**
 * @author sky.li
 * @module MsgSession
 * @desc 消息连接层，组合了packer(打包解包器)和(WsComm)数据收发层
 * */
import { WsComm } from "./socket/session";
import { MessagePacker } from "./message/message-packer";

export class MsgSession {
    // 通信层
    _comm: WsComm = null;
    _packer: MessagePacker = new MessagePacker();
    constructor(comm: WsComm) {
        this._comm = comm;
    }

    // 触发接收数据，该方法可能触发_packer.onUnpack()
    doRecv() {
        const data = this._comm.getRecv();
        this._packer.feedBytes(data)
    }

    // 发送数据
    send(data: number[]) {
        let packedData = this._packer.pack(data);
        this._comm.send(packedData);
    }
}
