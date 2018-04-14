import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {

  private messages: Array<any> = [];
  constructor() { }

  getMessages() {
    return this.messages;
  }

}
