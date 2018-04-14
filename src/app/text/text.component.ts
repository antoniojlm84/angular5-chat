import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MessagesService} from '../messages.service';

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

      const message = {
          username: this.username,
          message: this.message,
          date: dateText,
          read: false
      };

      this.messageService.getMessages().push(message);
      this.onClick.emit({
          username: this.username,
          message: this.message,
          date: dateText,
          read: false
      });
  }

  constructor(private messageService: MessagesService) {
      this.buttonLabel = 'Send';
  }

  ngOnInit() {
  }

}
