import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Contacts } from '../../../models/contacts.model';

@Component({
  selector: 'app-contact-form-component',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form-component.html',
  styleUrl: './contact-form-component.css',
})
export class ContactFormComponent {
  @Input() contact: Contacts | null = null;
  @Output() submitForm = new EventEmitter<Contacts>();
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', [
        Validators.required,
        Validators.maxLength(15)
      ]],
      lastName: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      phone: ['', Validators.required],
      company: [''],
      jobTitle: [''],
      categoryId: [0],
      isFavorite: [false],
      notes: [''],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['contact'] && this.contact) {
      this.contactForm.patchValue({
        firstName: this.contact.firstName,
        lastName: this.contact.lastName,
        email: this.contact.email,
        phone: this.contact.phone,
        company: this.contact.company,
        jobTitle: this.contact.jobTitle,
        categoryId: this.contact.categoryId,
        isFavorite: this.contact.isFavorite,
        notes: this.contact.notes
      });
    }
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.submitForm.emit(this.contactForm.value);
    }
  }
}
