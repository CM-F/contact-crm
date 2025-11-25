import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContactsPage } from './edit-contacts-page';

describe('EditContactsPage', () => {
  let component: EditContactsPage;
  let fixture: ComponentFixture<EditContactsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditContactsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditContactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
