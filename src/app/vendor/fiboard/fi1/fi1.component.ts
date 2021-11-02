import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Params,ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-fi1',
  templateUrl: './fi1.component.html',
  styleUrls: ['./fi1.component.css']
})
export class Fi1Component implements OnInit {

  default = true
  activate = false
  text = true
  invoicedisplay :any;
  getinvoice : any;
  constructor( private _router:Router, private _activateRoute : ActivatedRoute, private _auth:AuthService) { }
  onClick(){
    this._auth.logout()
  }

  clickHere(example,ex1) {
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
    console.log(localStorage.getItem('vendorid'));
    const raw = JSON.stringify({ invoice_no: example,fisc_year:ex1, type: this._activateRoute.snapshot.params.type });
    // console.log(raw);
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    }
    fetch("http://localhost:3000/vendor/displayinvoice", requestOptions as Params).then(response => response.json()).then(
      result => {
        this.invoicedisplay = result.item;
        console.log(this.invoicedisplay);
      }).catch(error => console.log("The error is ", error));

  }


  ngOnInit(): void {
    // var customer_no = 'ABC'

    const myHeaders = new Headers();
      myHeaders.append("Content-Type","application/json");
      console.log(localStorage.getItem('vendorid'));
      const raw = JSON.stringify({vendorid:localStorage.getItem('vendorid'),type:this._activateRoute.snapshot.params.type});
      // console.log(raw);
      let requestOptions = {
              method : 'POST',
              headers : myHeaders,
              body : raw,
              redirect : 'follow',
      }
      fetch("http://localhost:3000/vendor/getinvoice",requestOptions as Params).then(response=>response.json()).then(
        result=>{
          this.getinvoice=result.item;
          console.log(this.getinvoice);
        }).catch(error=>console.log("The error is ",error));
  }

}
