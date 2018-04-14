import { Component } from '@angular/core';
import {MessagesService} from './messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  messages: Array<any> = [];
  showMessage(ev) {
     this.messages.push(ev);
  }

    constructor(private messageService: MessagesService) { }
}
