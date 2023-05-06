"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const main = async () => {
    let s = new index_1.WsServer(10087);
    await s.readyPromise;
    s.onRecv(comm => {
        console.warn('recv from client');
        let data = comm.getRecv();
        console.warn('recv from client', JSON.stringify(data));
        comm.send([34, 56]);
    });
    s.onSessionError((id, err) => {
        console.warn('error from client', id, err);
    });
    s.onRemoteClose((id) => {
        console.warn('close from client', id);
    });
    console.log('server started');
};
main();
//# sourceMappingURL=start-server.js.map