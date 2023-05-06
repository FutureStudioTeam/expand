
import { DataChannelServer, DataChannelsExample } from ".."

const main = async () => {
    let MyServer = class extends DataChannelServer {

    };

    let myServer = new MyServer(10088, new DataChannelsExample());
    await myServer.readyPromise;
    console.warn('message server is ready');
}

main();