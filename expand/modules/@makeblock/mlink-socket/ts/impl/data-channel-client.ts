/**
 * @author sky.li
 * @module DataChannelClient
 * @desc 数据通道服务client
 * */

import { MessagePacker } from './message/message-packer';
import { WsComm } from './socket/session';
import { WsClient } from './socket/client';
import { MSG_TAG } from './message'
import { MsgSession } from './session';


export class DataChannelClient {
    _client: WsClient = null;
    _packer: MessagePacker = new MessagePacker();
    _session: MsgSession = null;
    readPromise: Promise<void> = null;
    constructor(host: string, port: number) {
        this._client = new WsClient(host, port);
        this.readPromise = this._client.readyPromise.then(() => {
            const comm = this._client.getComm();
            let sess = new MsgSession(comm)
            comm.onClose(() => {

            });
            comm.onError(() => {

            });
            comm.onRecv(() => {
                sess.doRecv();
            });
            sess._packer.onUnpack((data) => {
                this.onData(data);
            });
            this._session = sess;
        });
    }

    send(data: number[]): void {
        this._session.send(data);
    }

    onData(data: number[]) {
        console.log('onData', data);
    }
}
