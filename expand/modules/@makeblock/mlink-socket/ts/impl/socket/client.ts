/**
 * @author sky.li
 * @module WsClient
 * @desc websocket client封装为异步接口
 * */

import ws from 'ws';
import { WsComm, getId } from "./session";


export class WsClient {
    _id: number = 0;
    _ws: ws = null;
    _host: string = "localhost";
    _port: number = 10000;
    _addr: string = "";
    readyPromise: Promise<void> = null;
    _comm: WsComm = null;
    constructor(host: string, port: number) {
        this._host = host;
        this._port = port;
        this._id = getId();
        this._addr = `ws://${host}:${port}/`;
        this._ws = new ws(this._addr);
        this._ws.binaryType = "arraybuffer";
        this.readyPromise = this.setup();
    }

    getComm() {
        return this._comm;
    }

    async setup() {
        try {
            await new Promise((res, rej) => {
                let readyH: () => void = null;
                let readyFailH: (evt: ws.ErrorEvent) => any = null;
                readyH = () => {
                    this._ws.onopen = null;
                    this._ws.onerror = null;
                    res();
                };

                readyFailH = (evt: ws.ErrorEvent) => {
                    this._ws.onopen = null;
                    this._ws.onerror = null;
                    rej(evt.type);
                };

                this._ws.onopen = readyH;
                this._ws.onerror = readyFailH;
            });
            this._comm = new WsComm(this._ws);

        } catch (ex) {
            console.warn(`try connect to ${this._addr} fail`);
        }
    }
}
