import { MessagePacker } from '../impl/message/message-packer'
import { DataStream } from '../impl/message/data-stream'


import assert from 'assert';

const delay = (n: number) => {
    return new Promise((res) => {
        setTimeout(() => {
            res();
        }, n);
    });
}

async function test1() {
    console.warn('............test recv');
    let s = new DataStream();
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
    assert.deepEqual(recved, [1, 2, 3, 4, 5], "await recv fail");

    recved = await s.recv(2);
    assert.deepEqual(recved, [6, 7], "await recv fail");
    assert.deepEqual(s._datas, [8], "await recv fail");
    assert.deepEqual(s._reqCount, Number.MAX_SAFE_INTEGER, "await recv fail");
    console.warn('recv pass');
}


async function test2() {
    console.warn('............test recvTill');
    let s = new DataStream();
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
    assert.deepEqual(s._datas, [4, 5], "await recvTill fail");

    await s.recvTill([4, 5, 6, 7, 8]);
    assert.deepEqual(s._datas, [], "await recvTill fail");
    console.log('recvTill pass');
}


async function test3() {
    console.log('............test MessagePacker1');
    let data = [33, 44];
    let dataRecv = null;
    let s = new MessagePacker();
    let canUnpack = s.onUnpack(d => {
        dataRecv = d;
    });
    s.feedBytes([1, 2]);
    await delay(0)
    s.feedBytes([3, 4]);
    let packed = s.pack(data);
    s.feedBytes(packed);
    await delay(10);
    assert.deepEqual(s._isPacking, false, "await test MessagePacker fail");
    s.feedBytes([5]);
    assert.deepEqual(s._isPacking, true, "await test MessagePacker fail");
    s.feedBytes([6, 7]);
    assert.deepEqual(s._isPacking, true, "await test MessagePacker fail");

    await delay(10);
    assert.deepEqual(data, dataRecv, "await test MessagePacker fail");
    assert.deepEqual(s._stream._datas, [], "await test MessagePacker fail");
    console.log('MessagePacker1 pass');
}


async function test4() {
    console.log('............test MessagePacker2');
    let count: number[][] = [];
    let s = new MessagePacker();
    let canUnpack = s.onUnpack(d => {
        count.push(d);
    });
    s.feedBytes([1, 2]);
    await delay(0)
    s.feedBytes([3, 4]);
    s.feedBytes(s.pack([0x01]));
    s.feedBytes([1, 2]);
    await delay(0)
    s.feedBytes([3, 4]);
    s.feedBytes(s.pack([0x02]));
    await delay(10);
    s.feedBytes([5]);
    s.feedBytes([6, 7]);
    await delay(10);
    assert.deepEqual(count, [[0x01], [0x02]], "await test MessagePacker fail");
    assert.deepEqual(s._stream._datas, [], "await test MessagePacker fail");
    console.log('MessagePacker2 pass');
}

async function test5() {
    console.log('............test MessagePacker3');
    let count: number[][] = [];
    let s = new MessagePacker();
    let canUnpack = s.onUnpack(d => {
        count.push(d);
    });
    s.feedBytes(s.pack([0x01]));
    s.feedBytes(s.pack([0x02]));
    await delay(10);
    assert.deepEqual(count, [[0x01], [0x02]], "await test MessagePacker fail");
    assert.deepEqual(s._stream._datas, [], "await test MessagePacker fail");
    console.log('MessagePacker3 pass');
}


export async function testPack() {
    try {
        await test1();
        await test2();
        await test3();
        await test4();
        await test5();
    } catch (ex) {
        console.log('fail', ex);
    }
}

