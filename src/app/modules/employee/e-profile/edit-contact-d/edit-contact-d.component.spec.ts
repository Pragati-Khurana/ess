import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContactDComponent } from './edit-contact-d.component';

describe('EditContactDComponent', () => {
  let component: EditContactDComponent;
  let fixture: ComponentFixture<EditContactDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditContactDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditContactDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
