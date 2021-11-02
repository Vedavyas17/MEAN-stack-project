import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { EmplService } from '../../../empl.service';


@Component({
  selector: 'app-emp3',
  templateUrl: './emp3.component.html',
  styleUrls: ['./emp3.component.css']
})
export class Emp3Component implements OnInit {

  leaveinfo : any;
  leave : any;
  a = true
  b= false
  l = false
 
  constructor(private _router: Router, private _activateRoute: ActivatedRoute,private data:EmplService,private _auth: AuthService) { }
  onClick() {
    this._auth.logout()
  }
  event1(){
    this.a = true
    this.b = false
    // const myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    // console.log(localStorage.getItem('employeeid'));
    // const raw = JSON.stringify({ employeeid: localStorage.getItem('employeeid'), type: this._activateRoute.snapshot.params.type });
    // // console.log(raw);
    // let requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: 'follow',
    // }
    // fetch("http://localhost:3000/emp/leave", requestOptions as Params).then(response => response.json()).then(
    //   result => {
    //     this.leaveinfo = result;
    //     console.log(this.leaveinfo);
    //   }).catch(error => console.log("The error is ", error));
  }
  event2(){
    this.a = false
    this.b = true
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log(localStorage.getItem('employeeid'));
    // var emp_no = '00005010'
    const raw = JSON.stringify({ employeeid: localStorage.getItem('employeeid'), type: this._activateRoute.snapshot.params.type });
    // console.log(raw);
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    }
    fetch("http://localhost:3000/emp/leavebalance", requestOptions as Params).then(response => response.json()).then(
      result => {
        this.leave = result.item;
        console.log(this.leave);
      }).catch(error => console.log("The error is ", error));

  }
  event3(){
    this.a = false
    this.b = false
    this.l = true
  }
  onCreate(){
    
    let empid = (document.getElementById("empid") as HTMLInputElement).value;
    let date1 = (document.getElementById("date1") as HTMLInputElement).value;
    let date2 = (document.getElementById("date2") as HTMLInputElement).value;
    let abstype = (document.getElementById("abstype") as HTMLInputElement).value;



  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  console.log(localStorage.getItem('employeeid'));
  const raw = JSON.stringify({ "employeeid":empid,"abstype" : abstype, "date1" : date1,"date2" : date2, type: this._activateRoute.snapshot.params.type});
  const options = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  console.log(options);

this.data.upd(options).then((response) => {
  response.json().then((res) => {


      localStorage.setItem("secret",res.accessToken);
      //this.router.navigateByUrl('/customer/dashboard');


  })
})

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
    fetch("http://localhost:3000/emp/leave", requestOptions as Params).then(response => response.json()).then(
      result => {
        this.leaveinfo = result.item;
        console.log(this.leaveinfo);
      }).catch(error => console.log("The error is ", error));
  }

}





