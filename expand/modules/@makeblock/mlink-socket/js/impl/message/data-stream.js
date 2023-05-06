"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataStream {
    constructor() {
        this._datas = [];
        this._reqCount = Number.MAX_SAFE_INTEGER;
        this._recvFuture = null;
        this._toMatch = [];
        this._recvTillRes = null;
    }
    isEmpty() {
        if (this._datas.length == 0)
            return true;
        return false;
    }
    recv(n) {
        return new Promise((res, rej) => {
            this._reqCount = n;
            this._recvFuture = { res, rej };
            this._tryRecv();
        });
    }
    recvTill(buff) {
        return new Promise((res, rej) => {
            this._toMatch = [...buff];
            this._recvTillRes = { res, rej };
            this._tryRecvTill();
        });
    }
    _tryRecvTill() {
        if (this._recvTillRes == null)
            return;
        tryRecv: while (true) {
            for (let i = 0; i < this._toMatch.length; ++i) {
                // no more byte now
                if (i === this._datas.length) {
                    return;
                }
                if (this._toMatch[i] !== this._datas[i]) {
                    this._datas.shift();
                    continue tryRecv;
                }
            }
            break;
        }
        const res = this._recvTillRes.res;
        this._recvTillRes = null;
        const rest = this._datas.splice(this._toMatch.length);
        this._toMatch = [];
        this._datas = rest;
        res();
    }
    _tryRecv() {
        if (this._recvFuture == null)
            return;
        if (this._datas.length >= this._reqCount) {
            const rest = this._datas.splice(this._reqCount);
            const nbytes = this._datas;
            this._datas = rest;
            this._reqCount = Number.MAX_SAFE_INTEGER;
            const res = this._recvFuture.res;
            this._recvFuture = null;
            res(nbytes);
        }
    }
    feedBytes(data) {
        this._datas.push(...data);
        this._tryRecv();
        this._tryRecvTill();
    }
}
exports.DataStream = DataStream;
//# sourceMappingURL=data-stream.js.map