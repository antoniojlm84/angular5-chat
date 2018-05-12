import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextComponent } from './text.component';
import {FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MessagesService} from '../services/messages.service';
import {By} from '@angular/platform-browser';

describe('TextComponent', () => {
  let component: TextComponent;
  let fixture: ComponentFixture<TextComponent>;
  let MessagesServiceMock: Partial<MessagesService>;
  const loggedUserMock = {
      name: {
          first: 'Prueba',
          last: 'test',
      },
      email: 'aa@aaaa.es',
      address: {
          street: 'por ahi',
      },
      gender: 'male',
      picture: {
          medium: '',
          large: '',
          thumbnail: '',
      },
  };

  beforeEach(async(() => {

    MessagesServiceMock = {
       pushMessage: jasmine.createSpy('pushMessage')
    };

    TestBed.configureTestingModule({
      declarations: [ TextComponent ],
      imports: [
          FormsModule,
          ReactiveFormsModule
      ],
      providers:    [ {provide: MessagesService, useValue: MessagesServiceMock } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

    fit('should emmit messages logically', () => {
        expect(component).toBeTruthy();
        component.message = 'Esto es un mensaje de prueba';
        component.loggedUser = loggedUserMock;
        component.submmitted();
        expect(MessagesServiceMock.pushMessage).toHaveBeenCalled();
    });

   /*fit('should emit messages interactive', () => {

        //let valueAfterClick;
        component.loggedUser = loggedUserMock;

        const form = (fixture.debugElement.childNodes[4]).childNodes[1];
        const sendButton = form.query(By.css('.btn-primary')).nativeElement;
        form.querySelector('textarea').value('Esto es un mensaje de prueba');

        /*component.form.subscribe(item => {
            console.log(item);
            valueAfterClick = item;
        });

        sendButton.click();
        // expect(valueAfterClick).toBe('');
    });*/

    fit('should have a label in the button', () => {
        expect(component.buttonLabel).toBe('Send');
    });
});
