import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExperienceDComponent } from './edit-experience-d.component';

describe('EditExperienceDComponent', () => {
  let component: EditExperienceDComponent;
  let fixture: ComponentFixture<EditExperienceDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditExperienceDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExperienceDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
