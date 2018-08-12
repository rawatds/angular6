import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  @Input("name") userName: string;

  user = {};

  isCollapsed: boolean = true;

  constructor() { }

  ngOnInit() {
    this.user = {
      title: 'Mr',
      name: this.userName, //"Dharmender Rawat",
      email: "dsrawat@gmail.com",
      phones: [
          '123-456-7890',
          '222-555-4444'
      ]
    }
  
  }


  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    
  }

}
