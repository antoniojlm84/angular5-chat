import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent} from './app.component';
import { ChatComponent} from './chat/chat.component';
import { TextComponent } from './text/text.component';
import { BoardComponent } from './board/board.component';
import { FormsModule } from '@angular/forms';
import { MessagesService } from './services/messages.service';
import { ContactsComponent } from './contacts/contacts.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    BoardComponent,
    ContactsComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [
      MessagesService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
