import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  currentDate: string = "";
  lastName: string = "";
  someNumber: number = 100;


  constructor( /* firstName:string, salary: number */private _rest: RestService) { 

    this._rest.printToConsole("Date component constructor...");
    this.lastName = "Rawat";

    setInterval(() => {
          this.currentDate = new Date().toDateString() + ' ' +  new Date().toLocaleTimeString();
      } , 1000);
    }

  ngOnInit() {
  }

  addTwoNums(a:number, b:number) {
    return a+b;
  }

}
