import { Injectable } from '@angular/core';
import { MessageInterface } from '../interfaces/Message.interface';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessagesService {

  private messages: Array<MessageInterface> = [];
  messages$ = new Subject(); // observable

  constructor() { }

  getMessages() {
    // devuelvo el observable -> no el rray de mensajes a pelo
    return this.messages$;
  }

  pushMessage(message: MessageInterface) {
    this.messages.push(message);
    this.messages$.next(this.messages);
  }
}
