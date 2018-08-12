import { Component, OnInit } from '@angular/core';
import { RestService } from '../../rest.service';
import { Observable } from '../../../../node_modules/rxjs';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  username: string ="";
  response: any;

  constructor(private _svc: RestService) {

      this._svc.printToConsole("Initializing Personal component ...");

      
   }

  ngOnInit() {
  }

  showUserInfo(){
    let obs = this._svc.getUserInfo(this.username);
    obs.subscribe( (data) => {
      console.log(data);
      this.response  = data;
    }) ;

    //alert(this.response);

  }

}
