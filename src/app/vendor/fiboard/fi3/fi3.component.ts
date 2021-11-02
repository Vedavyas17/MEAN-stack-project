import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-fi3',
  templateUrl: './fi3.component.html',
  styleUrls: ['./fi3.component.css']
})
export class Fi3Component implements OnInit {

  default = true;
  act = true;
  act1 = false;
  act2 = true;
  credit : any;
  debit : any;
  constructor( private _router:Router, private _activateRoute : ActivatedRoute, private _auth:AuthService) { }
  onClick(){
    this._auth.logout()
  }

  clickHere(){
    this.default = false;
    this.act = false;
    this.act1 = true;
    this.act2 = false;

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
        fetch("http://localhost:3000/vendor/vdebit",requestOptions as Params).then(response=>response.json()).then(
          result=>{
            this.debit=result.item;
            console.log(this.debit);
          }).catch(error=>console.log("The error is ",error));
  

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
      fetch("http://localhost:3000/vendor/vcredit",requestOptions as Params).then(response=>response.json()).then(
        result=>{
          this.credit=result.item;
          console.log(this.credit);
        }).catch(error=>console.log("The error is ",error));
  }

}
