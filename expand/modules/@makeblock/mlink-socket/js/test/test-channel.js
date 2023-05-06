"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const data_channel_1 = require("../impl/data-channel");
const test1 = async () => {
    console.log('............test one chanel multi reg');
    let recv = [];
    let recv1 = [];
    data_channel_1.dataChannel.onRecv((ch, data) => {
        assert_1.default.deepEqual(ch, 20, "wrongly channel");
        recv = data;
    });
    data_channel_1.dataChannel.onRecv((ch, data) => {
        assert_1.default.deepEqual(ch, 20, "wrongly channel");
        recv1 = data;
    });
    data_channel_1.dataChannel.send(20, [3, 4, 5]);
    await new Promise((res) => {
        setTimeout(() => {
            assert_1.default.deepEqual(recv, Array.from(Buffer.from(`echo from 20: ${[3, 4, 5]}`, 'utf-8')));
            assert_1.default.deepEqual(recv, recv1);
            res();
        }, 2000);
    });
    console.log('pass');
};
exports.testChannel = async () => {
    await test1();
};
//# sourceMappingURL=test-channel.js.map