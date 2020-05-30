import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-listemp',
  templateUrl: './listemp.component.html',
  styleUrls: ['./listemp.component.css']
})
export class ListempComponent implements OnInit {

  employees: any;

  @Output() editedEmployeeInfo = new EventEmitter();

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.addedEmployee.subscribe((resp) => {
      this.getLatestEmployees();
    });
    this.getLatestEmployees();
  }

  getLatestEmployees() {
    this.employeeService.getLatestEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  editEmployee(employee) {
    this.editedEmployeeInfo.emit(employee);
  }

  deleteEmployee(employee) {
    this.employeeService.deleteEmployee(employee).subscribe((resp) => {
      this.getLatestEmployees();
    });
  }

}
