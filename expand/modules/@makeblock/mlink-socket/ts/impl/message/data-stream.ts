/**
 * @author sky.li
 * @module DataStream
 * @desc 数据流解析工具类
 * */
interface IStreamOut {
    recv(n: number): Promise<number[]>;
    recvTill(buff: number[]): Promise<void>;
}

interface IStreamIn {
    feedBytes(data: number[]): void;
}

type res_t = (data: number[]) => void;
type rej_t = (err: any) => void;

export class DataStream implements IStreamIn, IStreamOut {
    _datas: number[] = []
    _reqCount: number = Number.MAX_SAFE_INTEGER;
    _recvFuture: { res: res_t, rej: rej_t } = null;
    constructor() {
    }

    isEmpty(): boolean {
        if (this._datas.length == 0) return true;
        return false;
    }

    recv(n: number): Promise<number[]> {
        return new Promise((res: res_t, rej: rej_t) => {
            this._reqCount = n;
            this._recvFuture = { res, rej };
            this._tryRecv();
        })
    }

    _toMatch: number[] = [];
    _recvTillRes: { res: () => void, rej: rej_t } = null;
    recvTill(buff: number[]): Promise<void> {
        return new Promise((res, rej) => {
            this._toMatch = [...buff];
            this._recvTillRes = { res, rej };
            this._tryRecvTill();
        })
    }
    _tryRecvTill() {
        if (this._recvTillRes == null) return;
        tryRecv:
        while (true) {
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
        if (this._recvFuture == null) return;
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

    feedBytes(data: number[]): void {
        this._datas.push(...data);
        this._tryRecv();
        this._tryRecvTill();
    }
}
