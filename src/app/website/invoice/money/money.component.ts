import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css']
})
export class MoneyComponent implements OnInit {

  default = true
  activate2 = false
  text = true
  invoice : any
  invoice1 : any
  constructor(private _router: Router, private _activateRoute: ActivatedRoute, private _auth:AuthService) { }
  onClick(){
    this._auth.logout()
  }


  clickIt(item) {
    this.default = true
    this.text =false
    this.activate2 = true
    // this.details = {
    //   "CUSTOMER_ID": "000000",
    //   "SALESDOC_NO": example
    // }
    // var bill = '0000000011'
    // var salesdoc_no = '0010000032'

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({ bill_no: item, type: this._activateRoute.snapshot.params.type });
    // console.log(raw);
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    }
    fetch("http://localhost:3000/invoicedisp", requestOptions as Params).then(response => response.json()).then(
      result => {
        this.invoice1 = result.item;
        console.log(this.invoice1);
      }).catch(error => console.log("The error is ", error));

  }

  ngOnInit(): void {

    // var CUSTOMER_ID = '0000000006'

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
    fetch("http://localhost:3000/invoiceget", requestOptions as Params).then(response => response.json()).then(
      result => {
        this.invoice = result.item;
        console.log(this.invoice);
      }).catch(error => console.log("The error is ", error));
  }

}

