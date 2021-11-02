import { Component, OnInit } from '@angular/core';
import { Params,ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-debiting',
  templateUrl: './debiting.component.html',
  styleUrls: ['./debiting.component.css']
})
export class DebitingComponent implements OnInit {
  last : any;

  constructor( private _router:Router, private _activateRoute : ActivatedRoute, private _auth:AuthService) { }
  onClick(){
    this._auth.logout()
  }

  ngOnInit(): void {
    // var customer_no = 'ABC'

    const myHeaders = new Headers();
      myHeaders.append("Content-Type","application/json");
      console.log(localStorage.getItem('username'));
      const raw = JSON.stringify({CUSTOMER_ID:localStorage.getItem('username'),type:this._activateRoute.snapshot.params.type});
      // console.log(raw);
      let requestOptions = {
              method : 'POST',
              headers : myHeaders,
              body : raw,
              redirect : 'follow',
      }
      fetch("http://localhost:3000/custdetails",requestOptions as Params).then(response=>response.json()).then(
        result=>{
          this.last=result;
          console.log(this.last);
        }).catch(error=>console.log("The error is ",error));
  }

}
