import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-db-table',
  templateUrl: './employee-db-table.component.html',
  styleUrls: ['./employee-db-table.component.css']
})

export class EmployeeDBTableComponent implements OnInit {

  constructor(private employeesService:EmployeesService) {}
  employees:Employee[] = [];

  ngOnInit(): void {
    this.employeesService.refreshNeeded.subscribe(() => {this.getAllEmployees()})
    this.getAllEmployees();
  }

  private getAllEmployees(){
    this.employeesService.getAllEmployees()
    .subscribe({
      next: (employees) => {this.employees = employees},
      error: (response) => {console.log(response)}
    })
  }

}
 