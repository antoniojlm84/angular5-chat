import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {MessagesService} from '../messages.service';

@Component({
  selector: 'app-board-output',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

    @Input() content: Array<any>;
    @Output() onRead = new EventEmitter<any>();

    markAsRead(i) {
        this.onRead.emit(i);
    }

    constructor(private messageService: MessagesService) { }
    ngOnInit() {}
}
