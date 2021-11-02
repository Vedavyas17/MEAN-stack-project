import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-fi2',
  templateUrl: './fi2.component.html',
  styleUrls: ['./fi2.component.css']
})
export class Fi2Component implements OnInit {

  payage: any;
  constructor( private _router:Router, private _activateRoute : ActivatedRoute, private _auth:AuthService) { }
  onClick(){
    this._auth.logout()
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
      fetch("http://localhost:3000/vendor/vpayage",requestOptions as Params).then(response=>response.json()).then(
        result=>{
          this.payage=result.item;
          console.log(this.payage);
        }).catch(error=>console.log("The error is ",error));
  }

}
