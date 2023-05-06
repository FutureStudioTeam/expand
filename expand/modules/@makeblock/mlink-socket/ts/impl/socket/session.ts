/**
 * @author sky.li
 * @module WsServer
 * @desc websocket 连接层，表示一次通信的长连接收发
 * */

import ws from 'ws';
import { EventEmitter } from 'events'

export enum ESessionTate {
    e_init,
    e_ready,
    e_close,
    e_error
}

let _idCount = 0;
export const getId = () => {
    return _idCount++;
}

export interface IComm {
    getId(): number;
    send(data: number[]): void,
    getRecv(): number[]
}

export const ab2arr = (ab: ArrayBuffer): number[] => {
    let v = new Uint8Array(ab);
    return Array.from(v);
}

export const arr2ab = (arr: number[]) => {
    for (let n of arr) {
        if (n > 255) {
            console.error("illegal number array (item exceed 255)", arr);
            return null;
        }
    }
    return Uint8Array.from(arr).buffer;
}

export const buff2ab = (buff: Buffer) => {
    var ab = buff.buffer.slice(buff.byteOffset, buff.byteOffset + buff.byteLength);
    return ab;
}

export class WsComm implements IComm {
    _state: ESessionTate = ESessionTate.e_ready;
    _emitter: EventEmitter = new EventEmitter();
    _ws: ws = null;
    _recv: number[] = [];
    _id: number = 0;
    constructor(_ws: ws) {
        this._id = getId();
        this._ws = _ws;
        this._ws.on('message', msg => { // string | Buffer | ArrayBuffer | Buffer[];
            let buffer: ArrayBuffer = null;
            if (typeof (msg) === 'string') {
                buffer = buff2ab(Buffer.from(msg, "utf-8"));
            } else if (msg instanceof Buffer) {
                buffer = buff2ab(msg);
            } else if (msg instanceof ArrayBuffer) {
                buffer = msg;
            } else if (msg instanceof Array) {
                throw "ws receive an Array";
            } else {
                throw "ws receive impossible type";
            }
            const data = ab2arr(buffer);
            for (const n of data) {
                this._recv.push(n);
            }
            this._emitter.emit('recv', this);
        });

        this._ws.on('close', () => {
            if (this._state !== ESessionTate.e_ready) return;
            this._state = ESessionTate.e_close;
            this._emitter.emit('close', this);
        });

        this._ws.on('error', (err: Error) => {
            if (this._state !== ESessionTate.e_ready) return;
            this._state = ESessionTate.e_error;
            this._emitter.emit('error', this, err);
        });
    }

    send(data: number[]): void {
        this._ws.send(arr2ab(data));
    }

    getRecv(): number[] {
        const data = this._recv;
        this._recv = [];
        return data;
    }

    getId(): number {
        return this._id;
    }

    onRecv(h: (comm: WsComm) => void) {
        this._emitter.on('recv', h);
    }

    offRecv(h: (comm: WsComm) => void) {
        this._emitter.off('recv', h);
    }

    onClose(h: (comm: WsComm) => void) {
        this._emitter.on('close', h);
    }

    offClose(h: (comm: WsComm) => void) {
        this._emitter.off('close', h);
    }

    onError(h: (comm: WsComm, err: Error) => void) {
        this._emitter.on('error', h);
    }

    offError(h: (comm: WsComm, err: Error) => void) {
        this._emitter.off('error', h);
    }
}
