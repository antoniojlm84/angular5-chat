import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import {ChatComponent} from './chat/chat.component';
import {NewContactComponent} from './new-contact/new-contact.component';

export const appRoutes: Routes = [

    { path: '', component: ChatComponent },
    { path: 'contacts',      component: ContactsComponent },
    { path: 'contacts/new-contact',   component: NewContactComponent },
    // TODO: { path: '**', component: PageNotFoundComponent }
];
