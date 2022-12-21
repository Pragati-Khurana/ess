import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDailyAttendanceComponent } from './edit-daily-attendance.component';

describe('EditDailyAttendanceComponent', () => {
  let component: EditDailyAttendanceComponent;
  let fixture: ComponentFixture<EditDailyAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDailyAttendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDailyAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
