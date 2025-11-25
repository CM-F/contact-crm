import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListContactsService } from '../../../../shared/services/list-contacts-service';
import { Contacts } from '../../../models/contacts.model';
import { ContactFormComponent } from '../../ui/contact-form-component/contact-form-component';

@Component({
  selector: 'app-edit-contacts-page',
  standalone:true,
  imports: [ContactFormComponent],
  templateUrl: './edit-contacts-page.html',
  styleUrl: './edit-contacts-page.css',
})

export class EditContactsPage implements OnInit {
  route = inject(ActivatedRoute);
  router = inject(Router);
  listContactsServices = inject(ListContactsService);
  contact: Contacts | null = null;

  ngOnInit(): void {
    const contactId = Number(this.route.snapshot.paramMap.get('id'));
    this.contact = this.listContactsServices.getContactById(contactId);
    
    if (!this.contact) {
      this.router.navigate(['/contacts']);
    }
  }

  onSubmit(updatedContact: Contacts): void {
    if (this.contact) {
      const contactToUpdate: Contacts = {
        ...this.contact,
        ...updatedContact,
        updatedAt: new Date().toISOString(),
      };
      this.listContactsServices.updateContact(contactToUpdate);
      this.router.navigate([`/contacts/${this.contact.id}`]);
    }
  }
}
