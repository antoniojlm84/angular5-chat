import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TextComponent } from './text/text.component';
import { BoardComponent } from './board/board.component';
import {FormsModule} from '@angular/forms';
import {MessagesService} from './messages.service';


@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
      FormsModule
  ],
  providers: [
      MessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
