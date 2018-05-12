import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MessagesService} from '../services/messages.service';

@Component({
  selector: 'app-board-output',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

    @Output() onRead = new EventEmitter<any>();
    messages: any;

    markAsRead(i) {
        this.onRead.emit(i);
    }

    constructor(private messageService: MessagesService) {
        this.messages = this.messageService.getMessages();
    }
    ngOnInit() {}
}
