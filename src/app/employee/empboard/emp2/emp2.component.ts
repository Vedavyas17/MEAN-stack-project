import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { EmpService } from '../../../emp.service';

@Component({
  selector: 'app-emp2',
  templateUrl: './emp2.component.html',
  styleUrls: ['./emp2.component.css']
})
export class Emp2Component implements OnInit {

  uploadedFiles: Array<File>;
  empinfo : any;
  act1 = true;
  act2 = false;
  a = true;
  b = false;
  c = false
  constructor(private _router: Router, private _activateRoute: ActivatedRoute,private data:EmpService, private _auth: AuthService) { }
  common(){
    this.act1 = false;
    this.act2 = true;
    this.a = false;
    this.b = true
  }
  
  onClick() {
    this._auth.logout()
  }

  update(){
    this.c = true;

    let empid = (document.getElementById("empid") as HTMLInputElement).value;
    let name1 = (document.getElementById("name1") as HTMLInputElement).value;
    let name2 = (document.getElementById("name2") as HTMLInputElement).value;
    let city = (document.getElementById("city") as HTMLInputElement).value;
    // let district = (document.getElementById("district") as HTMLInputElement).value;
    let address = (document.getElementById("address") as HTMLInputElement).value;
    let pin = (document.getElementById("pincode") as HTMLInputElement).value;
    let country = (document.getElementById("country") as HTMLInputElement).value;
    let phone = (document.getElementById("phone") as HTMLInputElement).value;
    // let tt = (document.getElementById("tt") as HTMLInputElement).value;
    // console.log(city);
    // console.log(localStorage.getItem('vendorid'));


  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  console.log(localStorage.getItem('employeeid'));
  const raw = JSON.stringify({ "employeeid":empid,"city" : city, "fname" : name1,"address" : address , "phone" : phone,"lname" : name2 ,"pincode":pin, "country" : country,type:this._activateRoute.snapshot.params.type});
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
    fetch("http://localhost:3000/emp/details", requestOptions as Params).then(response => response.json()).then(
      result => {
        this.empinfo = result;
        console.log(this.empinfo);
      }).catch(error => console.log("The error is ", error));
  }

}




