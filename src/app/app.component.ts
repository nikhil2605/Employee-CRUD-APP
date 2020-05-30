import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-second-project';

  isEdit = false;

  employeeObj = {
    id: "",
    name: "",
    email: "",
    designation: ""
  }

  constructor(private employeeService: EmployeeService) { }

  receiveEmployeeInfo(employee) {
    this.employeeObj = Object.assign({}, employee);
    this.isEdit = true;
  }

  addEmployee(empForm) {
    let obj = empForm.value;
    obj.id = null;
    this.employeeService.createEmployee(obj).subscribe((resp) => {
      this.employeeService.informChild();
      empForm.form.reset();
    });
  }

  updateEmployee(empForm) {
    this.employeeService.updateEmployee(this.employeeObj).subscribe((resp) => {
      this.isEdit = false;
      this.employeeService.informChild();
      empForm.form.reset();
    });
  }
}
