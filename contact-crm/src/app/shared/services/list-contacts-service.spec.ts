import { TestBed } from '@angular/core/testing';

import { ListContactsService } from './list-contacts-service';

describe('ListContactsService', () => {
  let service: ListContactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListContactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
