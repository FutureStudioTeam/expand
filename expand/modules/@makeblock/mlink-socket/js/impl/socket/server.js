"use strict";
/**
 * @author sky.li
 * @module WsServer
 * @desc websocket server封装为异步接口
 * */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = __importDefault(require("ws"));
const session_1 = require("./session");
const events_1 = require("events");
class WsServer {
    constructor(port) {
        this._state = session_1.ESessionTate.e_init;
        this._addr = "";
        this._wss = null;
        this._sessions = new Map();
        this._emitter = new events_1.EventEmitter();
        this.readyPromise = null;
        let host = "localhost";
        this._addr = `ws://localhost:${port}/`;
        this._wss = new ws_1.default.Server({ host, port });
        this.readyPromise = this.setup();
    }
    async setup() {
        const wss = this._wss;
        try {
            await new Promise((res, rej) => {
                let readyH = null;
                let readyFailH = null;
                readyH = () => {
                    res();
                };
                readyFailH = (err) => {
                    rej(err);
                };
                wss.addListener('listening', readyH);
                wss.addListener('error', readyFailH);
            });
            wss.removeAllListeners();
            wss.on('error', (err) => {
                this._emitter.emit('error', err.message);
            });
            wss.on('connection', (_ws) => {
                console.warn('client enter');
                const comm = new session_1.WsComm(_ws);
                comm.onClose((comm) => {
                    console.warn('client exit');
                    const id = comm.getId();
                    this._sessions.delete(id);
                    this._emitter.emit('remoteClose', id);
                });
                comm.onError((comm, err) => {
                    console.warn('client met error');
                    const id = comm.getId();
                    this._sessions.delete(id);
                    this._emitter.emit('sessionError', id, err.message);
                });
                this._sessions.set(comm.getId(), comm);
                comm.onRecv((comm) => {
                    this._emitter.emit('recv', comm);
                });
            });
            wss.on('error', (err) => {
                if (this._state !== session_1.ESessionTate.e_ready)
                    return;
                console.error(err);
                this._state = session_1.ESessionTate.e_error;
            });
            this._state = session_1.ESessionTate.e_ready;
        }
        catch (ex) {
            wss.removeAllListeners();
            console.warn(`try connect to ${this._addr} fail`);
        }
    }
    onRecv(onReqH) {
        this._emitter.on('recv', onReqH);
        return () => {
            this._emitter.off('recv', onReqH);
        };
    }
    ;
    onRemoteClose(onCloseH) {
        this._emitter.on('remoteClose', onCloseH);
        return () => {
            this._emitter.off('remoteClose', onCloseH);
        };
    }
    onSessionError(onSessionErrorH) {
        this._emitter.on('sessionError', onSessionErrorH);
        return () => {
            this._emitter.off('sessionError', onSessionErrorH);
        };
    }
    onError(onErrH) {
        this._emitter.on('error', onErrH);
        return () => {
            this._emitter.off('error', onErrH);
        };
    }
    close() {
        if (this._state !== session_1.ESessionTate.e_ready)
            return;
        this._state = session_1.ESessionTate.e_close;
        this._wss.close();
    }
}
exports.WsServer = WsServer;
//# sourceMappingURL=server.js.map