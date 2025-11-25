import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Contacts } from '../../contacts/models/contacts.model';

@Injectable({
  providedIn: 'root',
})
export class ListContactsService {
  
  private storageKey = 'contacts';

  constructor(){
    if (!localStorage.getItem(this.storageKey)){
      const defaultContacts: Contacts[] = [
      {
        "id": 1,
        "firstName": "Martin",
        "lastName": "Clément",
        "email": "martin.clement@example.com",
        "phone": "+33612345678",
        "company": "Tech Solutions",
        "jobTitle": "Développeur Full-Stack",
        "categoryId": 1,
        "isFavorite": false,
        "notes": "Contact principal pour le projet X.",
        "createdAt": "2023-10-15T09:30:00Z",
        "updatedAt": "2023-10-15T09:30:00Z",
        "isDelete": false
      },
      {
        "id": 2,
        "firstName": "Jean",
        "lastName": "Dupont",
        "email": "jean.dupont@example.com",
        "phone": "+33687654321",
        "company": "Web Innovations",
        "jobTitle": "Designer UI/UX",
        "categoryId": 2,
        "isFavorite": true,
        "notes": "Expert en design d'interfaces utilisateur.",
        "createdAt": "2023-10-16T10:15:00Z",
        "updatedAt": "2023-10-16T10:15:00Z",
        "isDelete": false
      },
      {
        "id": 3,
        "firstName": "Alice",
        "lastName": "Martin",
        "email": "alice.martin@example.com",
        "phone": "+33655555555",
        "company": "Data Analytics",
        "jobTitle": "Data Scientist",
        "categoryId": 3,
        "isFavorite": false,
        "notes": "Spécialiste en analyse de données.",
        "createdAt": "2023-10-17T11:00:00Z",
        "updatedAt": "2023-10-17T11:00:00Z",
        "isDelete": false
      }];
      localStorage.setItem(this.storageKey, JSON.stringify(defaultContacts));
    }
  }


  // --------------------------list of contact
  getContacts(): Contacts[] {
    const contacts = localStorage.getItem(this.storageKey);
    return contacts ? JSON.parse(contacts) : [];
  }

  getContactById(id: number) {
    return this.getContacts().find(contact => contact.id === id) || null;
  }

  toggleFavorite(contactId: number): void {
    const contacts = this.getContacts();
    const index = contacts.findIndex(c => c.id === contactId);
    if (index !== -1) {
      contacts[index] = {
        ...contacts[index],
        isFavorite: !contacts[index].isFavorite,
        updatedAt: new Date().toISOString(),
      };
      this.saveContacts(contacts);
    }
  }

  // ----------------------details of contact

  private saveContacts(contacts: Contacts[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(contacts));
  }

  
  addContact(contact: Omit<Contacts, 'id' | 'createdAt' | 'updatedAt' | 'isDelete'>): void {
    const contacts = this.getContacts();
    
    const newContact: Contacts = {
      ...contact,
      id: contacts.length > 0 ? Math.max(...contacts.map(c => c.id)) + 1 : 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isFavorite: false,
      isDelete: false
    };
    contacts.push(newContact);
    this.saveContacts(contacts);
  }

  updateContact(updatedContact: Contacts): void {
    const contacts = this.getContacts();
    const index = contacts.findIndex(c => c.id === updatedContact.id);
    if (index !== -1) {
      contacts[index] = updatedContact;
      this.saveContacts(contacts);
    }
  }

  router = inject(Router);
  deleteContact(id: number): void {
    if (confirm("Are you sure to delete this contact ?")) {
      const contacts = this.getContacts();
      const index = contacts.findIndex(c => c.id === id);
      if (index !== -1) {
        contacts[index].isDelete = true;
        this.saveContacts(contacts);
        this.router.navigate(['/contacts']);
    }
    }
  }
}
