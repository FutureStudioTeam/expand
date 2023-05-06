"use strict";
/**
 * @author sky.li
 * @module DataStream
 * @desc 数据包解析工具类
 * */
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const data_stream_1 = require("./data-stream");
const _magic_head = Array.from(Buffer.from("__a4z1v1", "utf-8"));
class MessagePacker {
    constructor() {
        this._emitter = new events_1.EventEmitter();
        this._stream = new data_stream_1.DataStream();
        this._isPacking = false;
    }
    pack(data) {
        let msg = [..._magic_head];
        let len = data.length;
        let lo = (len & 0x00ff);
        let hi = (len & 0xff00) >> 8;
        msg.push(lo);
        msg.push(hi);
        msg.push(...data);
        return msg;
    }
    // 解协议包
    async _unpack() {
        if (this._isPacking)
            throw 'packing';
        while (true) {
            this._isPacking = true;
            await this._stream.recvTill(_magic_head);
            const [lo, hi] = await this._stream.recv(2);
            let len = hi * 0xff + lo;
            let data = await this._stream.recv(len);
            this._emitter.emit('unpack', data);
            if (this._stream.isEmpty())
                break;
        }
        this._isPacking = false;
    }
    // 当解出完整包
    onUnpack(h) {
        this._emitter.on('unpack', h);
        return () => this._emitter.off('unpack', h);
    }
    // 送入字节
    feedBytes(data) {
        if (!this._isPacking) {
            this._unpack();
        }
        this._stream.feedBytes(data);
    }
}
exports.MessagePacker = MessagePacker;
//# sourceMappingURL=message-packer.js.map