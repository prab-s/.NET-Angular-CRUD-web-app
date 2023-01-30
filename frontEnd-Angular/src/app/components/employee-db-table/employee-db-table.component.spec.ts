import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDBTableComponent } from './employee-db-table.component';

describe('EmployeeDBTableComponent', () => {
  let component: EmployeeDBTableComponent;
  let fixture: ComponentFixture<EmployeeDBTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDBTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDBTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
