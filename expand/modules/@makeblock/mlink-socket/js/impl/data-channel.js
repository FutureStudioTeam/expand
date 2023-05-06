"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author sky.li
 * @module IDataChannels
 * @desc 抽象的数据通道，IDataChannels, 对不同通道(顺序为0/1/2)收发
 * */
const events_1 = require("events");
class OneDataChannel extends events_1.EventEmitter {
    constructor(n) {
        super();
        this._id = 0;
        this._id = n;
    }
    send(data) {
        setTimeout(() => {
            this.emit('recv', Array.from(Buffer.from(`echo from ${this._id}: ${data}`, 'utf-8')));
        }, 1000);
    }
}
class DataChannelsExample {
    constructor() {
        this._chs = [];
        this._emitter = new events_1.EventEmitter();
    }
    _getCh(n) {
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
    send(chId, data) {
        let ch = this._getCh(chId);
        ch.send(data);
    }
    onRecv(chHandle) {
        this._emitter.on('recv_ch', chHandle);
        return () => {
            this._emitter.off('recv_ch', chHandle);
        };
    }
}
exports.DataChannelsExample = DataChannelsExample;
//# sourceMappingURL=data-channel.js.map