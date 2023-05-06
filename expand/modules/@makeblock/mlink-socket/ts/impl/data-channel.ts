/**
 * @author sky.li
 * @module IDataChannels
 * @desc 抽象的数据通道，IDataChannels, 对不同通道(顺序为0/1/2)收发
 * */
import { EventEmitter } from "events";

class OneDataChannel extends EventEmitter {
    _id: number = 0;
    constructor(n: number) {
        super();
        this._id = n;
    }
    send(data: number[]): void {
        setTimeout(() => {
            this.emit('recv', Array.from(Buffer.from(`echo from ${this._id}: ${data}`, 'utf-8')));
        }, 1000);
    }
}

export interface IDataChannels {
    send(chId: number, data: number[]): void;
    onRecv(h: (chId: number, data: number[]) => void): () => void;
}

export class DataChannelsExample implements IDataChannels {
    _chs: OneDataChannel[] = []
    _emitter: EventEmitter = new EventEmitter();
    _getCh(n: number): OneDataChannel {
        let ch = this._chs[n];
        if (ch instanceof OneDataChannel) {
            return ch;
        }
        ch = new OneDataChannel(n);
        this._chs[n] = ch;
        ch.on('recv', data => {
            this._emitter.emit('recv_ch', n, data);
        });
        return ch;
    }

    send(chId: number, data: number[]): void {
        let ch = this._getCh(chId);
        ch.send(data);
    }

    onRecv(chHandle: (chId: number, data: number[]) => void): () => void {
        this._emitter.on('recv_ch', chHandle);
        return () => {
            this._emitter.off('recv_ch', chHandle);
        }
    }
}
