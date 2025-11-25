import { Component, inject } from '@angular/core';
import { ContactsManagerService } from '../../../../shared/services/contacts-manager-service';
import { ContactListComponent } from '../../../../contacts/components/ui/contact-list-component/contact-list-component';

@Component({
  selector: 'app-favorites-page',
  standalone: true,
  imports: [ContactListComponent],
  templateUrl: './favorites-page.html',
  styleUrl: './favorites-page.css',
})
export class FavoritesPage {

  contactsManagerService = inject(ContactsManagerService);

  favorites = this.contactsManagerService.favorites;

  onFavoriteUpdated(): void {
    this.contactsManagerService.refreshContacts();
  }
}
