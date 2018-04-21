import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  users: any;

  constructor(private userService: UsersService) {
      userService.getUsers().subscribe(users => {
        console.log(users);
        this.users = users['results'];
      });
  }

  eventLogin(user) {
      this.userService.setUserLogged(user);
  }

  ngOnInit() {
  }

}
