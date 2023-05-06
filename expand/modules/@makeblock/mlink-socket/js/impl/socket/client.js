"use strict";
/**
 * @author sky.li
 * @module WsClient
 * @desc websocket client封装为异步接口
 * */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = __importDefault(require("ws"));
const session_1 = require("./session");
class WsClient {
    constructor(host, port) {
        this._id = 0;
        this._ws = null;
        this._host = "localhost";
        this._port = 10000;
        this._addr = "";
        this.readyPromise = null;
        this._comm = null;
        this._host = host;
        this._port = port;
        this._id = session_1.getId();
        this._addr = `ws://${host}:${port}/`;
        this._ws = new ws_1.default(this._addr);
        this._ws.binaryType = "arraybuffer";
        this.readyPromise = this.setup();
    }
    getComm() {
        return this._comm;
    }
    async setup() {
        try {
            await new Promise((res, rej) => {
                let readyH = null;
                let readyFailH = null;
                readyH = () => {
                    this._ws.onopen = null;
                    this._ws.onerror = null;
                    res();
                };
                readyFailH = (evt) => {
                    this._ws.onopen = null;
                    this._ws.onerror = null;
                    rej(evt.type);
                };
                this._ws.onopen = readyH;
                this._ws.onerror = readyFailH;
            });
            this._comm = new session_1.WsComm(this._ws);
        }
        catch (ex) {
            console.warn(`try connect to ${this._addr} fail`);
        }
    }
}
exports.WsClient = WsClient;
//# sourceMappingURL=client.js.map