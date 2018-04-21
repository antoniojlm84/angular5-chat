import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import {ChatComponent} from './chat/chat.component';

export const appRoutes: Routes = [

    { path: '', component: ChatComponent },
    { path: 'contacts',      component: ContactsComponent },
    // TODO: { path: '**', component: PageNotFoundComponent }
];
