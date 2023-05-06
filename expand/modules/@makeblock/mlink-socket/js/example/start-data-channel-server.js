"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const main = async () => {
    let MyServer = class extends __1.DataChannelServer {
    };
    let myServer = new MyServer(10088, new __1.DataChannelsExample());
    await myServer.readyPromise;
    console.warn('message server is ready');
};
main();
//# sourceMappingURL=start-data-channel-server.js.map