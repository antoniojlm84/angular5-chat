import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { User } from '../interfaces/User.interface';

@Injectable()
export class UsersService {

    url: string;
    users;
    users$: any;
    userLogged: any;

    constructor(private http: HttpClient) {
        this.url = 'https://randomuser.me/api/?results=15';
        this.users$ = this.http.get(this.url);
        this.users$.subscribe((data) => {
            this.users = data;
        });
    }

    getUsers() {
        return this.users ? Observable.of(this.users) : this.users$ ;
    }

    addUser(user: User) {
        this.users.results.push(user);
    }

    setUserLogged (user) {
        this.userLogged = user;
    }

    getUserLogged () {
        return this.userLogged ? this.userLogged : '';
    }
}
