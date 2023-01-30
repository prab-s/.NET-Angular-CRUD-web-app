import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDBDataEntryComponent } from './employee-db-data-entry.component';

describe('EmployeeDBDataEntryComponent', () => {
  let component: EmployeeDBDataEntryComponent;
  let fixture: ComponentFixture<EmployeeDBDataEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDBDataEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDBDataEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
