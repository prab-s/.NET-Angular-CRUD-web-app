import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Employee } from '../models/employee.model';

// Source: https://www.youtube.com/watch?v=DvnzeCfYg0s

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient) { }

  baseApiUrl:string = "https://192.168.1.77:7092/";

  private _refreshNeeded = new Subject<void>();
  get refreshNeeded(){
    return this._refreshNeeded;
  }

  getAllEmployees(): Observable<Employee[]>{
    return this.http
      .get<Employee[]>(this.baseApiUrl + 'api/Employees');
  }

  addEmployee(addEmployeeRequest:Employee):Observable<Employee> {
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000'
    return this.http
      .post<Employee>(this.baseApiUrl + 'api/Employees', addEmployeeRequest)
      .pipe(tap(() => {this._refreshNeeded.next()}));
  }

  editEmployee(editEmployeeRequest:Employee):Observable<Employee>{
    return this.http
      .put<Employee>(this.baseApiUrl + 'api/Employees', editEmployeeRequest)
      .pipe(tap(() => {this._refreshNeeded.next()}));
  }

  deleteEmployee(deleteEmployeeRequest:Employee):Observable<Employee>{
    return this.http
      .delete<Employee>(this.baseApiUrl + 'api/Employees/' + deleteEmployeeRequest.id)
      .pipe(tap(() => {this._refreshNeeded.next()}));
  }
}