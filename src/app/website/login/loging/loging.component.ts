import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loging',
  templateUrl: './loging.component.html',
  styleUrls: ['./loging.component.css']
})
export class LogingComponent implements OnInit {

  custdet: any
  custdetedit : any
  default =true
  active =false
  act = false
  act2 = false
  constructor(private _router: Router, private _activateRoute: ActivatedRoute) { }

  clickIt(){
    this.default=false
    this.active = true

      var customer_no = '0000000011'
      var name1 = ''
      var name2 = ''
      var pstlz = ''
      var spart = ''
      var phone = ''
      var code = ''
      var adrnr = ''
      var land = ''
      var ort01 = ''

  
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      // console.log(localStorage.getItem('username'));
      const raw = JSON.stringify({ CUSTOMER_ID: customer_no,username1:name1,NAME2:name2,PSTLZ:pstlz,SPART:spart,TELF1:phone,BUKRS:code,ADRNR:adrnr,LAND1:land,ORT01:ort01, type: this._activateRoute.snapshot.params.type });
      // console.log(raw);
      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      }
      fetch("http://localhost:3000/custdetailsedit", requestOptions as Params).then(response => response.json()).then(
        result => {
          this.custdetedit = result.item;
          console.log(this.custdetedit);
        }).catch(error => console.log("The error is ", error));
    }
     clickhere(){
       this.act2=true
       console.log('hi');
     }

  ngOnInit(): void {

    // var customer_no = '0000000011'
    // var name1 = 'veda'

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
    fetch("http://localhost:3000/custdetails", requestOptions as Params).then(response => response.json()).then(
      result => {
        this.custdet = result.item;
        console.log(this.custdet);
      }).catch(error => console.log("The error is ", error));
  }

}


