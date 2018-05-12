import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent} from './app.component';
import { ChatComponent} from './chat/chat.component';
import { TextComponent } from './text/text.component';
import { BoardComponent } from './board/board.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MessagesService } from './services/messages.service';
import { ContactsComponent } from './contacts/contacts.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users.service';
import { NewContactComponent } from './new-contact/new-contact.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    BoardComponent,
    ContactsComponent,
    ChatComponent,
    NewContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
      MessagesService,
      UsersService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
