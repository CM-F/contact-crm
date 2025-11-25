import { Injectable, signal, computed, inject } from '@angular/core';
import { Contacts } from '../../contacts/models/contacts.model';
import { ListContactsService } from './list-contacts-service';

@Injectable({
  providedIn: 'root',
})
export class ContactsManagerService {
  private listContactsService = inject(ListContactsService);

  // ================ SIGNALS
  // ---------------- Filters
  searchTerm = signal<string>('');
  selectedCategory = signal<number | null>(null);
  showFavoritesOnly = signal<boolean>(false);
  showDeleted = signal<boolean>(false);

  // ---------------- Sorted
  sortBy = signal<'name' | 'date'>('name');
  sortDirection = signal<'asc' | 'desc'>('asc');

  allContacts = signal<Contacts[]>(this.listContactsService.getContacts());
  

  // ================== FILTERS METHODS
  private filterBySearchTerm(contacts: Contacts[]){
    const term = this.searchTerm().toLowerCase();
    return contacts.filter(contact => 
      contact.firstName.toLocaleLowerCase().includes(term) ||
      contact.lastName.toLocaleLowerCase().includes(term) ||
      contact.email.toLocaleLowerCase().includes(term)
      );
    }

  private filterByCategory(contacts: Contacts[]): Contacts[] {
    return contacts.filter(contact => contact.categoryId === this.selectedCategory());
  }

  private filterByFavorites(contacts: Contacts[]): Contacts[] {
    return contacts.filter(contact => contact.isFavorite);
  }

  // =================== SORTING METHODS
  private sortContacts(contacts: Contacts[]): Contacts[] {
    return contacts.sort((a, b) => {
      if (this.sortBy() === 'name') {
        const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
        const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();
        return this.sortDirection() === 'asc'
          ? nameA.localeCompare(nameB)
          : nameB.localeCompare(nameA);
      } else {
        const dateA = new Date(a.updatedAt ?? a.createdAt).getTime();
        const dateB = new Date(b.updatedAt ?? b.createdAt).getTime();
        return this.sortDirection() === 'asc'
          ? dateA - dateB
          : dateB - dateA;
      }
    });
  }


  // ============== FILTERED CONTACT
  filteredContacts = computed(()=> {
    let contacts = this.allContacts();
    
    if (!this.showDeleted()){
      contacts = contacts.filter(contact => !contact.isDelete);
    } else {
      contacts = contacts.filter(contact => contact.isDelete);
    };
    
    if (this.searchTerm()){
      contacts = this.filterBySearchTerm(contacts);
    }
    
    if (this.selectedCategory()) {
      contacts = this.filterByCategory(contacts);
    }
    
    if (this.showFavoritesOnly()) {
      contacts = this.filterByFavorites(contacts);
    }
    
    return contacts;
    });

  sortedContacts = computed(() => {
    return this.sortContacts(this.filteredContacts());
  })


  // ================= UPDATING
  updateSearchTerm(term: string): void {
    this.searchTerm.set(term);
  }

  updateCategory(categoryId: number | null): void {
    this.selectedCategory.set(categoryId);
  }

  toggleFavoritesOnly(): void {
    this.showFavoritesOnly.update(value => !value);
  }

  toggleShowDeleted(): void {
    this.showDeleted.update(value => !value);
  }

  updateSortBy(sortBy: 'name' | 'date'): void {
    if (this.sortBy() === sortBy) {
      this.sortDirection.update(direction => direction === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortBy.set(sortBy);
      this.sortDirection.set('asc');
    }
  }

  refreshContacts(): void {
    this.allContacts.set(this.listContactsService.getContacts());
  }

  favorites = computed(() => {  
    return this.sortContacts(
      this.allContacts().filter(contact => contact.isFavorite && !contact.isDelete)
    );
  });

  getContactsByCategory(categoryId: number): Contacts[] {
    return this.sortContacts(
      this.allContacts().filter(contact => contact.categoryId === categoryId && !contact.isDelete)
    );
  }

  getDeletedContacts(): Contacts[] {
    return this.sortContacts(
      this.allContacts().filter(contact => contact.isDelete)
    );
  }
}
