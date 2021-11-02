import { Component, OnInit } from '@angular/core';
import { Params,ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
inquiryFetch : any;
  constructor(private _router:Router, private _activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    var customer_no = 'ABC'
    var salesdoc_no = '0010000031'

    const myHeaders = new Headers();
      myHeaders.append("Content-Type","application/json");
      const raw = JSON.stringify({CUSTOMER_ID:customer_no,SALESDOC_NO:salesdoc_no,type:this._activateRoute.snapshot.params.type});
      // console.log(raw);
      let requestOptions = {
              method : 'POST',
              headers : myHeaders,
              body : raw,
              redirect : 'follow',
      }
      fetch("http://localhost:3000/fetenquire",requestOptions as Params).then(response=>response.json()).then(
        result=>{
          this.inquiryFetch=result.item;
          console.log(this.inquiryFetch);
        }).catch(error=>console.log("The error is ",error));
  }

}

