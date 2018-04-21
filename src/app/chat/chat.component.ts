import { Component } from '@angular/core';
import { MessagesService } from '../services/messages.service';
import {MessageInterface} from '../interfaces/Message.interface';

@Component({
  selector: 'app-chat-root',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  messages: Array<MessageInterface> = [];
  showMessage(ev) {
     this.messageService.pushMessage(ev);
  }

    constructor(private messageService: MessagesService) { }
}
