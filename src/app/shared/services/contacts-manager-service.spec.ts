import { TestBed } from '@angular/core/testing';

import { ContactsManagerService } from './contacts-manager-service';

describe('ContactsManagerService', () => {
  let service: ContactsManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactsManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
