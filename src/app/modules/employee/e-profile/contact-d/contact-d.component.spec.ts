import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDComponent } from './contact-d.component';

describe('ContactDComponent', () => {
  let component: ContactDComponent;
  let fixture: ComponentFixture<ContactDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
