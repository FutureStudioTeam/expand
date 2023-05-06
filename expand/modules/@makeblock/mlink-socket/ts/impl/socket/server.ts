/**
 * @author sky.li
 * @module WsServer
 * @desc websocket server封装为异步接口
 * */

import ws from 'ws';
import { ESessionTate, WsComm, IComm } from "./session";
import { EventEmitter } from 'events';

export class WsServer {
    _state: ESessionTate = ESessionTate.e_init;
    _addr: string = "";
    _wss: ws.Server = null;
    _sessions: Map<number, WsComm> = new Map();
    _emitter: EventEmitter = new EventEmitter();
    readyPromise: Promise<void> = null;
    constructor(port: number) {
        let host = "localhost";
        this._addr = `ws://localhost:${port}/`;
        this._wss = new ws.Server({ host, port });
        this.readyPromise = this.setup();
    }

    async setup() {
        const wss = this._wss;
        try {
            await new Promise((res, rej) => {
                let readyH: () => void = null;
                let readyFailH: (evt: Event) => any = null;
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

            wss.on('error', (err: Error) => {
                this._emitter.emit('error', err.message);
            });

            wss.on('connection', (_ws: ws) => {
                console.warn('client enter');
                const comm = new WsComm(_ws);
                comm.onClose((comm) => {
                    console.warn('client exit');
                    const id = comm.getId();
                    this._sessions.delete(id);
                    this._emitter.emit('remoteClose', id);
                });
                comm.onError((comm, err: Error) => {
                    console.warn('client met error');
                    const id = comm.getId();
                    this._sessions.delete(id);
                    this._emitter.emit('sessionError', id, err.message);
                })
                this._sessions.set(comm.getId(), comm);
                comm.onRecv((comm) => {
                    this._emitter.emit('recv', comm);
                })
            });

            wss.on('error', (err: Error) => {
                if (this._state !== ESessionTate.e_ready) return;
                console.error(err);
                this._state = ESessionTate.e_error;
            });

            this._state = ESessionTate.e_ready;
        } catch (ex) {
            wss.removeAllListeners();
            console.warn(`try connect to ${this._addr} fail`);
        }
    }

    onRecv(onReqH: (comm: WsComm) => void): () => void {
        this._emitter.on('recv', onReqH);
        return () => {
            this._emitter.off('recv', onReqH);
        }
    };

    onRemoteClose(onCloseH: (id: number) => void): () => void {
        this._emitter.on('remoteClose', onCloseH);
        return () => {
            this._emitter.off('remoteClose', onCloseH);
        }
    }

    onSessionError(onSessionErrorH: (id: number, err: string) => void): () => void {
        this._emitter.on('sessionError', onSessionErrorH);
        return () => {
            this._emitter.off('sessionError', onSessionErrorH);
        }
    }

    onError(onErrH: (err: string) => void): () => void {
        this._emitter.on('error', onErrH);
        return () => {
            this._emitter.off('error', onErrH);
        }
    }

    close(): void {
        if (this._state !== ESessionTate.e_ready) return;
        this._state = ESessionTate.e_close;
        this._wss.close();
    }
}

