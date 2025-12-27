import nats from 'node-nats-streaming';
import type { Message } from 'node-nats-streaming';
import { randomBytes } from 'crypto'

console.clear();

const stan = nats.connect('ticketing', randomBytes(4).toString('hex'), {
  url: 'http://localhost:4222'
});

(stan as any).on('connect', () => {
  console.log('Listener Connected to NATS');

  const options = stan.subscriptionOptions()
    .setManualAckMode(true);
  const subscription = stan.subscribe('ticket:created', 'orders-service-queue-group', options); // 

  (subscription as any).on('message', (msg: Message) => {

    const data = msg.getData();
    console.log('Listener subscription');

    if (typeof data === 'string') {

      console.log(`receivere event #${msg.getSequence()}, with data: ${data}`);
    }

    msg.ack();
  });
});