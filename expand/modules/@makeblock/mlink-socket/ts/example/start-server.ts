
import { WsServer } from "../index"

const main = async () => {
    let s = new WsServer(10087);
    await s.readyPromise;
    s.onRecv(comm => {
        console.warn('recv from client');
        let data = comm.getRecv();
        console.warn('recv from client', JSON.stringify(data));
        comm.send([34, 56]);
    });

    s.onSessionError((id, err) => {
        console.warn('error from client', id, err);
    })

    s.onRemoteClose((id) => {
        console.warn('close from client', id);
    })
    console.log('server started');
}

main();