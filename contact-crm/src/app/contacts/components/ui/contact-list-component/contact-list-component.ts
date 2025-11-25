import { Component, input, output, inject } from '@angular/core';
import { Contacts } from '../../../models/contacts.model';
import { ListContactsService } from '../../../../shared/services/list-contacts-service';


@Component({
  selector: 'app-contact-list-component',
  standalone: true,
  imports: [],
  templateUrl: './contact-list-component.html',
  styleUrl: './contact-list-component.css',
})
export class ContactListComponent {
  
  contacts = input.required<Contacts[]>();

  details = output<number>()

  onDetails(contactId: number) {
    this.details.emit(contactId);
  }

  listContactsServices = inject(ListContactsService);
  
  favoriteUpdated = output<void>();

  toggleFavorite(contactId: number): void {
    this.listContactsServices.toggleFavorite(contactId);
    this.favoriteUpdated.emit();
    window.location.reload();
  }
}
