"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const message_packer_1 = require("../impl/message/message-packer");
const data_stream_1 = require("../impl/message/data-stream");
const assert_1 = __importDefault(require("assert"));
const delay = (n) => {
    return new Promise((res) => {
        setTimeout(() => {
            res();
        }, n);
    });
};
async function test1() {
    console.warn('............test recv');
    let s = new data_stream_1.DataStream();
    setTimeout(() => {
        s.feedBytes([1, 2]);
        s.feedBytes([3, 4]);
        s.feedBytes([5]);
        setTimeout(() => {
            s.feedBytes([6]);
            s.feedBytes([7]);
            s.feedBytes([8]);
        }, 2);
    }, 0);
    let recved = await s.recv(5);
    assert_1.default.deepEqual(recved, [1, 2, 3, 4, 5], "await recv fail");
    recved = await s.recv(2);
    assert_1.default.deepEqual(recved, [6, 7], "await recv fail");
    assert_1.default.deepEqual(s._datas, [8], "await recv fail");
    assert_1.default.deepEqual(s._reqCount, Number.MAX_SAFE_INTEGER, "await recv fail");
    console.warn('recv pass');
}
async function test2() {
    console.warn('............test recvTill');
    let s = new data_stream_1.DataStream();
    setTimeout(() => {
        s.feedBytes([1, 2]);
        s.feedBytes([3, 4]);
        s.feedBytes([5]);
        setTimeout(() => {
            s.feedBytes([6]);
            s.feedBytes([7]);
            s.feedBytes([8]);
        }, 2);
    }, 0);
    await s.recvTill([2, 3]);
    // console.log(s._datas);
    assert_1.default.deepEqual(s._datas, [4, 5], "await recvTill fail");
    await s.recvTill([4, 5, 6, 7, 8]);
    assert_1.default.deepEqual(s._datas, [], "await recvTill fail");
    console.log('recvTill pass');
}
async function test3() {
    console.log('............test MessagePacker1');
    let data = [33, 44];
    let dataRecv = null;
    let s = new message_packer_1.MessagePacker();
    let canUnpack = s.onUnpack(d => {
        dataRecv = d;
    });
    s.feedBytes([1, 2]);
    await delay(0);
    s.feedBytes([3, 4]);
    let packed = s.pack(data);
    s.feedBytes(packed);
    await delay(10);
    assert_1.default.deepEqual(s._isPacking, false, "await test MessagePacker fail");
    s.feedBytes([5]);
    assert_1.default.deepEqual(s._isPacking, true, "await test MessagePacker fail");
    s.feedBytes([6, 7]);
    assert_1.default.deepEqual(s._isPacking, true, "await test MessagePacker fail");
    await delay(10);
    assert_1.default.deepEqual(data, dataRecv, "await test MessagePacker fail");
    assert_1.default.deepEqual(s._stream._datas, [], "await test MessagePacker fail");
    console.log('MessagePacker1 pass');
}
async function test4() {
    console.log('............test MessagePacker2');
    let count = [];
    let s = new message_packer_1.MessagePacker();
    let canUnpack = s.onUnpack(d => {
        count.push(d);
    });
    s.feedBytes([1, 2]);
    await delay(0);
    s.feedBytes([3, 4]);
    s.feedBytes(s.pack([0x01]));
    s.feedBytes([1, 2]);
    await delay(0);
    s.feedBytes([3, 4]);
    s.feedBytes(s.pack([0x02]));
    await delay(10);
    s.feedBytes([5]);
    s.feedBytes([6, 7]);
    await delay(10);
    assert_1.default.deepEqual(count, [[0x01], [0x02]], "await test MessagePacker fail");
    assert_1.default.deepEqual(s._stream._datas, [], "await test MessagePacker fail");
    console.log('MessagePacker2 pass');
}
async function test5() {
    console.log('............test MessagePacker3');
    let count = [];
    let s = new message_packer_1.MessagePacker();
    let canUnpack = s.onUnpack(d => {
        count.push(d);
    });
    s.feedBytes(s.pack([0x01]));
    s.feedBytes(s.pack([0x02]));
    await delay(10);
    assert_1.default.deepEqual(count, [[0x01], [0x02]], "await test MessagePacker fail");
    assert_1.default.deepEqual(s._stream._datas, [], "await test MessagePacker fail");
    console.log('MessagePacker3 pass');
}
async function testPack() {
    try {
        await test1();
        await test2();
        await test3();
        await test4();
        await test5();
    }
    catch (ex) {
        console.log('fail', ex);
    }
}
exports.testPack = testPack;
//# sourceMappingURL=test-pack.js.map