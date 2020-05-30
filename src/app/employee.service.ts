import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  addedEmployee = new Subject();

  editedEmployee = new Subject();

  @Output() newEvent = new EventEmitter();

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:8080/employee/";


  getLatestEmployees() {
    return this.http.get(this.baseUrl + 'employee-list');
  }

  createEmployee(employee) {
    return this.http.post(this.baseUrl + 'save-employee', employee);
  }

  updateEmployee(employee) {
    return this.http.put(this.baseUrl + 'update-employee/' + employee.id, employee);
  }

  deleteEmployee(employee) {
    return this.http.delete(this.baseUrl + 'delete-employee/' + employee.id);
  }

  informChild() {
    this.addedEmployee.next();
  }
}
