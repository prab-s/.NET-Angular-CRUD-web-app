import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDBPageComponent } from './employee-db-page.component';

describe('EmployeeDBPageComponent', () => {
  let component: EmployeeDBPageComponent;
  let fixture: ComponentFixture<EmployeeDBPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDBPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDBPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
