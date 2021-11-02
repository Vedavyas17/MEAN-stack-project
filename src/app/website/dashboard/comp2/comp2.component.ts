import { Component, OnInit } from '@angular/core';
import { Params,ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  saleOrder : any;
  constructor( private _router:Router, private _activateRoute : ActivatedRoute) { }

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
      fetch("http://localhost:3000/sorder1",requestOptions as Params).then(response=>response.json()).then(
        result=>{
          this.saleOrder=result.item;
          console.log(this.saleOrder);
        }).catch(error=>console.log("The error is ",error));
  }

}
