import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  //resp: string;

  constructor(private _http: HttpClient) {
    console.log("Inside constructor of RestService ...");
   }

  printToConsole(arg: any) {
    console.log(arg);
  }

  getUserInfo(username: string) {
    console.log("Inside RestService.getUserInfo ...");
    let obs = this._http.get("https://api.github.com/users/" + username);    

    return obs;
  }
}
