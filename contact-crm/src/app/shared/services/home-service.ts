import { Injectable, signal, computed, inject } from '@angular/core';
import { Contacts } from '../../contacts/models/contacts.model';
import { ListContactsService } from './list-contacts-service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private listContactsService = inject(ListContactsService);

  allContacts = signal<Contacts[]>(this.listContactsService.getContacts());

  numberOfContacts = computed(() =>
    this.allContacts().filter(contact => !contact.isDelete).length
  );

  numberOfFavorites = computed(() =>
    this.allContacts().filter(contact => contact.isFavorite && !contact.isDelete).length
  );

  numberOfCategories = computed(() => {
    const categories = new Set(this.allContacts().map(contact => contact.categoryId));
    return categories.size;
  });

  lastContactRecorded = computed(() => {
    const contacts = this.allContacts().filter(contact => !contact.isDelete);
    if (contacts.length === 0) return null;
    return contacts.reduce((latest, contact) =>
      new Date(latest.createdAt) > new Date(contact.createdAt) ? latest : contact
    );
  });

  refreshContacts(): void {
    this.allContacts.set(this.listContactsService.getContacts());
  }
}

