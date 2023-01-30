import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-db-data-entry',
  templateUrl: './employee-db-data-entry.component.html',
  styleUrls: ['./employee-db-data-entry.component.css']
})

export class EmployeeDBDataEntryComponent implements OnInit {

  addEmployeeRequest:Employee = {
    id: '',
    firstname: '',
    surname: '',
    dob: new Date(),
    gender: '',
    role: '',
    email: '',
    phone: 0,
    department: '',
    salary: 0
  };
  
  constructor(
    private employeeService:EmployeesService, 
    // private router:Router,
    ){}
  
  public trigger:boolean = false;

  ngOnInit(): void {
    this.employeeService.refreshNeeded.subscribe(() => {this.closeAndClear()})
  }

  closeAndClear(){
    document.getElementById("closeButtonDataEntryModal")?.click();
    console.log("Running <data-entry> close and clear")
    // this.router.navigate(['employee-details']);
    // document.location.reload()
    this.addEmployeeRequest = {
      id: '',
      firstname: '',
      surname: '',
      dob: new Date(),
      gender: '',
      role: '',
      email: '',
      phone: 0,
      department: '',
      salary: 0
    }
  }
  
  addNewEmployeeDetails(){
    this.employeeService.addEmployee(this.addEmployeeRequest)
    .subscribe({
      next: (employee) => {},
      error: (response) => {console.log(response)}
    });
  }

}
