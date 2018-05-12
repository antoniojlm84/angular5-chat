import { Component } from '@angular/core';
import { MessagesService } from '../services/messages.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-chat-root',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent {

  loggedUser: string;

  showMessage(ev) {
     this.messageService.pushMessage(ev);
  }

  constructor(private messageService: MessagesService, private userService: UsersService) {
      this.loggedUser = userService.getUserLogged();
  }
}
