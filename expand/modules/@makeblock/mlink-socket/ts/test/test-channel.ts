import assert from 'assert';
import { dataChannel } from '../impl/data-channel'


const test1 = async () => {
    console.log('............test one chanel multi reg')
    let recv: number[] = [];
    let recv1: number[] = [];
    dataChannel.onRecv((ch, data) => {
        assert.deepEqual(ch, 20, "wrongly channel");
        recv = data;
    });

    dataChannel.onRecv((ch, data) => {
        assert.deepEqual(ch, 20, "wrongly channel");
        recv1 = data;
    });
    dataChannel.send(20, [3, 4, 5]);
    await new Promise((res) => {
        setTimeout(() => {
            assert.deepEqual(recv, Array.from(Buffer.from(`echo from 20: ${[3, 4, 5]}`, 'utf-8')));
            assert.deepEqual(recv, recv1);
            res();
        }, 2000);
    });
    console.log('pass');
}


export const testChannel = async () => {
    await test1();
};
