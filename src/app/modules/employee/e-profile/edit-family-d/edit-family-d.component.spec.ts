import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFamilyDComponent } from './edit-family-d.component';

describe('EditFamilyDComponent', () => {
  let component: EditFamilyDComponent;
  let fixture: ComponentFixture<EditFamilyDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFamilyDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFamilyDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
