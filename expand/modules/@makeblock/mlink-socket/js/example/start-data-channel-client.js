"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const main = async () => {
    let MyClient = class extends index_1.DataChannelClient {
        usecase() {
            const delay = (n) => {
                return new Promise((res) => {
                    setTimeout(() => {
                        res();
                    }, n);
                });
            };
            this.send(index_1.Messages.reg(3));
            this.send(index_1.Messages.reg(5));
            (async () => {
                await delay(100);
                this.send(index_1.Messages.send(1, [5, 6]));
                await delay(200);
                this.send(index_1.Messages.send(1, [3, 35, 36]));
                await delay(200);
                this.send(index_1.Messages.send(5, [55, 56]));
                await delay(500);
                // this.send(Messages.unreg(5));
                this.send(index_1.Messages.send(3, [31, 32]));
                await delay(200);
                this.send(index_1.Messages.send(5, [51, 52]));
                this.send(index_1.Messages.send(5, [51, 52]));
            })();
        }
        onData(data) {
            // super.onData(data);
            if (data.length <= 1) {
                console.error('invalid message', data);
                return;
            }
            let type = data.shift();
            if (type == index_1.MSG_TAG.msg_recv) {
                if (data.length <= 1) {
                    console.error('invalid msg_send message', data);
                    return;
                }
                let ch = data.shift();
                console.log(`recv from ch ${ch}:`, Buffer.from(data).toString('utf-8'));
            }
            else {
                console.error('invalid message type', type);
            }
        }
    };
    let myClient = new MyClient('localhost', 10088);
    await myClient.readPromise;
    myClient.usecase();
    console.warn('message client is ready');
};
main();
//# sourceMappingURL=start-data-channel-client.js.map