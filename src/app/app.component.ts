import { Component } from '@angular/core';
import { Employee } from './child-employee/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First App';
  employee: Employee;

  constructor(){
    this.employee = new Employee();
    this.employee.empId = 890;
    this.employee.empName = 'Dharmender Rawat';
    this.employee.designation = 'Associate Technical Architect';
    this.employee.salary = 2345.65;
  }

}
