import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  //   enquireOrder : any;
  //   constructor(private _router:Router, private _activateRoute : ActivatedRoute) { }

  //   ngOnInit(): void {

  //     var customer_no = 'ABC'

  //     const myHeaders = new Headers();
  //       myHeaders.append("Content-Type","application/json");
  //       const raw = JSON.stringify({CUSTOMER_ID:customer_no,type:this._activateRoute.snapshot.params.type});
  //       // console.log(raw);
  //       let requestOptions = {
  //               method : 'POST',
  //               headers : myHeaders,
  //               body : raw,
  //               redirect : 'follow',
  //       }
  //       fetch("http://localhost:3000/inqdisplaydetails",requestOptions as Params).then(response=>response.json()).then(
  //         result=>{
  //           this.enquireOrder=result.item;
  //           console.log(this.enquireOrder);
  //         }).catch(error=>console.log("The error is ",error));
  //   }

  // }

  default = true
  activate = false
  text = true
  details: any;
  enquire: any;
  output: any;
  inquiryadvarray: any;
  testing1: any;
  constructor(private _router: Router, private _activateRoute: ActivatedRoute) { }

  clickMe(example) {
    this.default = true
    this.activate = true
    this.text = false
    // this.details = {
    //   "CUSTOMER_ID": "000000",
    //   "SALESDOC_NO": example
    // }
    // var customer_no = '0000000011'
    // console.log(localStorage.getItem('username'));
    // var salesdoc_no = '0010000032'

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log(localStorage.getItem('username'));
    const raw = JSON.stringify({ CUSTOMER_ID: localStorage.getItem('username'), SALESDOC_NO: example, type: this._activateRoute.snapshot.params.type });
    // console.log(raw);
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    }
    fetch("http://localhost:3000/fetenquire", requestOptions as Params).then(response => response.json()).then(
      result => {
        this.testing1 = result.item;
        console.log(this.testing1);
      }).catch(error => console.log("The error is ", error));

  }

  

  ngOnInit(): void {

    // var customer_no = '0000000011'

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log(localStorage.getItem('username'));
    const raw = JSON.stringify({ CUSTOMER_ID: localStorage.getItem('username'), type: this._activateRoute.snapshot.params.type });
    // console.log(raw);
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    }
    fetch("http://localhost:3000/testdetails", requestOptions as Params).then(response => response.json()).then(
      result => {
        this.enquire = result.item;
        console.log(this.enquire);
      }).catch(error => console.log("The error is ", error));
  }

}

