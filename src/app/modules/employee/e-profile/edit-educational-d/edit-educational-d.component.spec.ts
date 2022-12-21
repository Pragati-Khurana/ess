import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEducationalDComponent } from './edit-educational-d.component';

describe('EditEducationalDComponent', () => {
  let component: EditEducationalDComponent;
  let fixture: ComponentFixture<EditEducationalDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEducationalDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEducationalDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
