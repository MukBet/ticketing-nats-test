import type { Message } from 'node-nats-streaming';
import { Listener } from './base-listener';
import type { TicketCreatedEvent } from './ticket-created-event';
import { Subjects } from './subjects';


export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
  queueGroupName = 'payments-service';

  onMessage(data: TicketCreatedEvent['data'], msg: Message) {
    console.log('Event data:', data);

    // Acknowledge the message
    console.log(data.id);
    console.log(data.title);
    console.log(data.price);

    msg.ack();
  }
}