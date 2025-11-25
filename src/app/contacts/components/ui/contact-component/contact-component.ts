import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ListContactsService } from '../../../../shared/services/list-contacts-service';
import { Contacts } from '../../../models/contacts.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-contact-component',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.css',
})
export class ContactComponent {
  contact: Contacts | null = null;
  listContactsService = inject(ListContactsService);
  
  router = inject(Router);
  onEditContact() {
    if (this.contact){
      this.router.navigate([`/contacts/${this.contact.id}/edit`]);
    }
  }

  onDeleteContact() {
    if (this.contact) {
      this.listContactsService.deleteContact(this.contact.id);
    }
  }
  
  route = inject(ActivatedRoute);
  constructor(){
    const contactId = Number(this.route.snapshot.paramMap.get('id'));
    this.contact = this.listContactsService.getContactById(contactId);
  }

}
