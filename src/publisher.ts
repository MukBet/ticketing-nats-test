import nats from 'node-nats-streaming';

console.clear();

const stan = nats.connect('ticketing', 'abc', {
  url: 'http://localhost:4222'
});

(stan as any).on('connect', () => {
  console.log('Connected to NATS');

  const data = JSON.stringify({
    id: '24e5',
    title: 'asd',
    price: 44
  });

  stan.publish('ticket:created', data, () => {

    console.log('Event published');
  })
});