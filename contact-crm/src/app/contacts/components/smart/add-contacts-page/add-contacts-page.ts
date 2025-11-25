import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ListContactsService } from '../../../../shared/services/list-contacts-service';
import { Contacts } from '../../../models/contacts.model';
import { ContactFormComponent } from '../../ui/contact-form-component/contact-form-component';


@Component({
  selector: 'app-add-contacts-page',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './add-contacts-page.html',
  styleUrls: ['./add-contacts-page.css']
})
export class AddContactsPage {
  router = inject(Router);
  listContactsService = inject(ListContactsService);

  onSubmit(contact: Contacts): void {
    this.listContactsService.addContact(contact);
    this.router.navigate(['/contacts']);
  }
}