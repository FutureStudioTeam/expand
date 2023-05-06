
import { WsClient } from "../index"

const main = async () => {
  let c = new WsClient('localhost', 10087);
  await c.readyPromise;
  const comm = c.getComm();
  let count = 0;
  setInterval(() => {
    console.warn('send to server');
    let buff = Buffer.from("hello 世界", 'utf-8');
    comm.send(Array.from(buff));
  }, 3000);

  comm.onRecv(() => {
    const recv = Buffer.from(comm.getRecv());
    console.warn('recv from server', recv.toString('utf-8'));
  });

  comm.onClose(() => {
    console.warn('server is closed');
  });

  console.log('client started');
}

main();