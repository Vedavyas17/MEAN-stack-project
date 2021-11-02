import { Component, OnInit } from '@angular/core';
import { Params,ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deliver',
  templateUrl: './deliver.component.html',
  styleUrls: ['./deliver.component.css']
})
export class DeliverComponent implements OnInit {

  deliveryList : any;
  constructor(private _router:Router, private _activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    var customer_no = 'ABC'

    const myHeaders = new Headers();
      myHeaders.append("Content-Type","application/json");
      const raw = JSON.stringify({CUSTOMER_ID:customer_no,type:this._activateRoute.snapshot.params.type});
      // console.log(raw);
      let requestOptions = {
              method : 'POST',
              headers : myHeaders,
              body : raw,
              redirect : 'follow',
      }
      fetch("http://localhost:3000/loddetails",requestOptions as Params).then(response=>response.json()).then(
        result=>{
          this.deliveryList=result.item;
          console.log(this.deliveryList);
        }).catch(error=>console.log("The error is ",error));
  }

}
