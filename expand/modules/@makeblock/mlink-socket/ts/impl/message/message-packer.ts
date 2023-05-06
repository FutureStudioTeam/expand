/**
 * @author sky.li
 * @module DataStream
 * @desc 数据包解析工具类
 * */

import { EventEmitter } from "events";
import { DataStream } from './data-stream'

interface IPack {
    // 组协议包
    pack(data: number[]): number[];
    // 收包回调
    onUnpack(h: (data: number[]) => void): () => void;
    // 写入字节
    feedBytes(data: number[]): void;
}

const _magic_head = Array.from(Buffer.from("__a4z1v1", "utf-8"));
export class MessagePacker implements IPack {
    _emitter: EventEmitter = new EventEmitter();
    _stream: DataStream = new DataStream();

    pack(data: number[]): number[] {
        let msg = [..._magic_head];
        let len = data.length;
        let lo = (len & 0x00ff);
        let hi = (len & 0xff00) >> 8;
        msg.push(lo);
        msg.push(hi);
        msg.push(...data);
        return msg;
    }
    _isPacking: boolean = false;
    // 解协议包
    async _unpack(): Promise<void> {
        if (this._isPacking) throw 'packing';
        while (true) {
            this._isPacking = true;
            await this._stream.recvTill(_magic_head);
            const [lo, hi] = await this._stream.recv(2);
            let len = hi * 0xff + lo;
            let data = await this._stream.recv(len);
            this._emitter.emit('unpack', data);
            if (this._stream.isEmpty()) break;
        }
        this._isPacking = false;
    }

    // 当解出完整包
    onUnpack(h: (data: number[]) => void): () => void {
        this._emitter.on('unpack', h);
        return () => this._emitter.off('unpack', h);
    }

    // 送入字节
    feedBytes(data: number[]): void {
        if (!this._isPacking) {
            this._unpack();
        }

        this._stream.feedBytes(data);
    }
}
