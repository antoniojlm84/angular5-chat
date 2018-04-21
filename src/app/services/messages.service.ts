import { Injectable } from '@angular/core';
import {MessageInterface} from '../interfaces/Message.interface';

@Injectable()
export class MessagesService {

  private messages: Array<MessageInterface> = [];
  constructor() { }

  getMessages() {
    return this.messages;
  }

}
