import { Component, OnInit } from '@angular/core';
import { Params,ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-vdetails',
  templateUrl: './vdetails.component.html',
  styleUrls: ['./vdetails.component.css']
})
export class VdetailsComponent implements OnInit {

  new : any;
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
      fetch("http://localhost:3000/vendor/detail",requestOptions as Params).then(response=>response.json()).then(
        result=>{
          this.new=result;
          console.log(this.new);
        }).catch(error=>console.log("The error is ",error));
  }

}
