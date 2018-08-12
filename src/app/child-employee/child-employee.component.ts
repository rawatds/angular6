import { Component, OnInit, Input } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-child-employee',
  templateUrl: './child-employee.component.html',
  styleUrls: ['./child-employee.component.css']
})
export class ChildEmployeeComponent implements OnInit {


  employee: Employee;
  developer: string = 'Dharmender';

  // @Input('empl') employeeObj: Employee;

  constructor() { }

  ngOnInit() {
    this.employee = new Employee();

    this.employee.empId = this.employeeObj.empId;
    this.employee.empName = 'Mr ' + this.employeeObj.empName;
    this.employee.designation = this.employeeObj.designation;
    this.employee.salary = this.employeeObj.salary
  }

}
