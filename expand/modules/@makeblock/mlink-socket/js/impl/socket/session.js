"use strict";
/**
 * @author sky.li
 * @module WsServer
 * @desc websocket 连接层，表示一次通信的长连接收发
 * */
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
var ESessionTate;
(function (ESessionTate) {
    ESessionTate[ESessionTate["e_init"] = 0] = "e_init";
    ESessionTate[ESessionTate["e_ready"] = 1] = "e_ready";
    ESessionTate[ESessionTate["e_close"] = 2] = "e_close";
    ESessionTate[ESessionTate["e_error"] = 3] = "e_error";
})(ESessionTate = exports.ESessionTate || (exports.ESessionTate = {}));
let _idCount = 0;
exports.getId = () => {
    return _idCount++;
};
exports.ab2arr = (ab) => {
    let v = new Uint8Array(ab);
    return Array.from(v);
};
exports.arr2ab = (arr) => {
    for (let n of arr) {
        if (n > 255) {
            console.error("illegal number array (item exceed 255)", arr);
            return null;
        }
    }
    return Uint8Array.from(arr).buffer;
};
exports.buff2ab = (buff) => {
    var ab = buff.buffer.slice(buff.byteOffset, buff.byteOffset + buff.byteLength);
    return ab;
};
class WsComm {
    constructor(_ws) {
        this._state = ESessionTate.e_ready;
        this._emitter = new events_1.EventEmitter();
        this._ws = null;
        this._recv = [];
        this._id = 0;
        this._id = exports.getId();
        this._ws = _ws;
        this._ws.on('message', msg => {
            let buffer = null;
            if (typeof (msg) === 'string') {
                buffer = exports.buff2ab(Buffer.from(msg, "utf-8"));
            }
            else if (msg instanceof Buffer) {
                buffer = exports.buff2ab(msg);
            }
            else if (msg instanceof ArrayBuffer) {
                buffer = msg;
            }
            else if (msg instanceof Array) {
                throw "ws receive an Array";
            }
            else {
                throw "ws receive impossible type";
            }
            const data = exports.ab2arr(buffer);
            for (const n of data) {
                this._recv.push(n);
            }
            this._emitter.emit('recv', this);
        });
        this._ws.on('close', () => {
            if (this._state !== ESessionTate.e_ready)
                return;
            this._state = ESessionTate.e_close;
            this._emitter.emit('close', this);
        });
        this._ws.on('error', (err) => {
            if (this._state !== ESessionTate.e_ready)
                return;
            this._state = ESessionTate.e_error;
            this._emitter.emit('error', this, err);
        });
    }
    send(data) {
        this._ws.send(exports.arr2ab(data));
    }
    getRecv() {
        const data = this._recv;
        this._recv = [];
        return data;
    }
    getId() {
        return this._id;
    }
    onRecv(h) {
        this._emitter.on('recv', h);
    }
    offRecv(h) {
        this._emitter.off('recv', h);
    }
    onClose(h) {
        this._emitter.on('close', h);
    }
    offClose(h) {
        this._emitter.off('close', h);
    }
    onError(h) {
        this._emitter.on('error', h);
    }
    offError(h) {
        this._emitter.off('error', h);
    }
}
exports.WsComm = WsComm;
//# sourceMappingURL=session.js.map