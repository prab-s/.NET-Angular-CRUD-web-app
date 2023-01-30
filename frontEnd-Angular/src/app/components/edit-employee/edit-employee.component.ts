import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})

export class EditEmployeeComponent implements OnInit{

  @Input()editEmployeeRequest:Employee = {
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

  LocalDate:string = "---"

  constructor(private employeeService:EmployeesService){}

  ngOnInit(): void {
    this.employeeService.refreshNeeded.subscribe(() => {this.closeAndClear()})
  }

  closeAndClear(){
    document.getElementById('closeButtonEditModal' + this.editEmployeeRequest.id)?.click();
    // document.getElementsByClassName('modal-open')[-0].ariaHidden;
    // console.log("Running <edit-employee> close and clear")
    // this.router.navigate(['employee-details']);
    // document.location.reload()
    this.editEmployeeRequest = {
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
    this.LocalDate = ''
  }
  
  editEmployeeDetails(){
    this.editEmployeeRequest.dob = new Date(this.LocalDate);
    this.employeeService.editEmployee(this.editEmployeeRequest)
    .subscribe({
      next: (employee) => {},
      error: (response) => {console.log(response)}
    });
  }

  onModalOpen(){
    this.LocalDate = this.editEmployeeRequest.dob.toString().split("T")[0];
  }

  deleteEntry(){
    this.employeeService.deleteEmployee(this.editEmployeeRequest)
    .subscribe({
      next: (employee) => {},
      error: (response) => {console.log(response)}
    });
  }

}
