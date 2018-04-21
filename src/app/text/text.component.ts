import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MessagesService } from '../services/messages.service';
import {MessageInterface} from '../interfaces/Message.interface';

@Component({
  selector: 'app-text-input',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})

export class TextComponent implements OnInit {

  username: string;
  message: string;
  buttonLabel: string;

  @Output() onClick = new EventEmitter<any>();
  emitEvent() {
      const msgDate = new Date();
      const dateText = `${msgDate.getDay()}-${msgDate.getMonth() + 1}-${msgDate.getFullYear()} ${msgDate.getHours()}:${msgDate.getMinutes()}`;

      const message: MessageInterface = {
          username: this.username,
          message: this.message,
          date: dateText,
          read: false
      };

      this.messageService.pushMessage(message);
      // TODO: hacer un observable de esto
      // this.onClick.emit(message);
  }

  constructor(private messageService: MessagesService) {
      this.buttonLabel = 'Send';
  }

  ngOnInit() {
  }

}
