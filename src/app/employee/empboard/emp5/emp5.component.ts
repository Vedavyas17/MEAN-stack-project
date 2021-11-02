import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-emp5',
  templateUrl: './emp5.component.html',
  styleUrls: ['./emp5.component.css']
})
export class Emp5Component implements OnInit {

  payinfo : any
  emp : any
  a = true
  b = false
  constructor(private _router: Router, private _activateRoute: ActivatedRoute,private _auth: AuthService) { }
  onClick() {
    this._auth.logout()
  }
  event1(){
    this.a = true
    this.b = false
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log(localStorage.getItem('employeeid'));
    const raw = JSON.stringify({ employeeid: localStorage.getItem('employeeid'), type: this._activateRoute.snapshot.params.type });
    // console.log(raw);
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    }
    fetch("http://localhost:3000/emp/payslip", requestOptions as Params).then(response => response.json()).then(
      result => {
        this.payinfo = result.item;
        console.log(this.payinfo);
      }).catch(error => console.log("The error is ", error));
  }
  event2(){
    this.a = false
    this.b = true
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log(localStorage.getItem('employeeid'));
    const raw = JSON.stringify({ employeeid: localStorage.getItem('employeeid'), type: this._activateRoute.snapshot.params.type });
    // console.log(raw);
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    }
    fetch("http://localhost:3000/emp/finale", requestOptions as Params).then(response => response.json()).then(
      result => {
        this.emp = result;
        console.log(this.emp);
      }).catch(error => console.log("The error is ", error));
    }
  
  

  ngOnInit(): void {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log(localStorage.getItem('employeeid'));
    const raw = JSON.stringify({ employeeid: localStorage.getItem('employeeid'), type: this._activateRoute.snapshot.params.type });
    // console.log(raw);
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    }
    fetch("http://localhost:3000/emp/payslip", requestOptions as Params).then(response => response.json()).then(
      result => {
        this.payinfo = result.item;
        console.log(this.payinfo);
      }).catch(error => console.log("The error is ", error));
  }

}

