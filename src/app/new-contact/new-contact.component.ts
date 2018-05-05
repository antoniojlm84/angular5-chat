import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { User } from '../interfaces/User.interface';
import { debounceTime } from 'rxjs/operators';
import {UsersService} from '../services/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

    newContactForm: any;

    constructor(private formBuilder: FormBuilder, private userService: UsersService, private router: Router) {
        this.newContactForm = this.formBuilder.group({
            name: this.formBuilder.group({
                first: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
                last: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            }),
            email: ['', [<any>Validators.required, <any>Validators.minLength(5),  <any>Validators.email]],
            address: this.formBuilder.group({
                street: ['', <any>Validators.required],
            }),
            gender: ['', [<any>Validators.required]],
            picture: this.formBuilder.group({
                medium: [''],
                large: [''],
                thumbnail: [''],
            }),
        });

        this.newContactForm.get('address.street').valueChanges.pipe(debounceTime(1000)).subscribe((data) => {
            // TODO: hacer la llamada a la api de google maps yq ue nos devuelva la latitud y longitud de la direccion
            // TODO: meterlo en el user interface
        });
    }

    submmitted() {
        if (this.newContactForm.valid) {
            const user: User = this.newContactForm.value;
            user.picture.thumbnail = (user.gender === 'male') ? '/assets/images/male.png' : '/assets/images/female.png';
            console.log('new-contact: ' + user);
            this.userService.addUser(user);
            // TODO: añadir un observable y que se navegue una vez añadido el user
            this.router.navigate(['/contacts']);
        } else {
            alert('Invalido!');
        }
    }

    ngOnInit() {
    }
}
