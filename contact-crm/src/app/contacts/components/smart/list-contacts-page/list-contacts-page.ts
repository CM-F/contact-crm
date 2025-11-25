import { Component, inject, computed, signal } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { Contacts } from '../../../models/contacts.model';
import { ListContactsService } from '../../../../shared/services/list-contacts-service';
import { ContactsManagerService } from '../../../../shared/services/contacts-manager-service';
import { ContactListComponent } from '../../ui/contact-list-component/contact-list-component';

@Component({
  selector: 'app-list-contacts-page',
  imports: [ContactListComponent, RouterLink],
  templateUrl: './list-contacts-page.html',
  styleUrl: './list-contacts-page.css',
})
export class ListContactsPage {
  
  contacts: Contacts[] = [];
  listContactsServices = inject(ListContactsService);
  constructor(){
    this.contacts = this.listContactsServices.getContacts();
  }
  
  router = inject(Router);
  onDetails(contactId: number){
    this.router.navigate(["contacts", contactId]);
  }

  onFavoriteUpdated(): void {
    this.contacts = this.listContactsServices.getContacts();
  }

  // ================== MANAGE FILTERS AND SORTED
  contactsManagerService = inject(ContactsManagerService);
  sortedContacts = this.contactsManagerService.sortedContacts;

  updateSearchTerm(event: Event): void {
    this.contactsManagerService.updateSearchTerm((event.target as HTMLInputElement).value);
  }
  
  updateCategory(categoryId: number | null): void {
    this.contactsManagerService.updateCategory(categoryId);
  }
  
  toggleFavoritesOnly(): void {
    this.contactsManagerService.toggleFavoritesOnly();
  }
  
  toggleShowDeleted(): void {
    this.contactsManagerService.toggleShowDeleted();
  }
  
  updateSortBy(sortBy: 'name' | 'date'): void {
    this.contactsManagerService.updateSortBy(sortBy);
  }
}
