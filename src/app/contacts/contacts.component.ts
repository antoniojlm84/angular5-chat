import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UsersService} from '../services/users.service';
import {
    trigger,
    state,
    style,
    animate,
    transition,
    group
} from '@angular/animations';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css'],
    animations: [
        trigger('flyInOut', [
            state('false', style({
                background: 'URL("/assets/images/loading.gif")',
                display: 'block'
            })),
            state('true', style({
                background: 'none',
                display: 'none'
            })),
            transition('inactive => active', animate('100ms ease-in')),
        ])
    ]
})
export class ContactsComponent implements OnInit {

  users: any;
  isLoading: boolean;

  constructor(private userService: UsersService) {
      this.isLoading = false;
      this.userService.getUsers().subscribe(users => {
          console.log(users);
          this.isLoading = true;
          this.users = users['results'];
      });
  }

  eventLogin(user) {
      this.userService.setUserLogged(user);
  }

  ngOnInit() {
  }

}
