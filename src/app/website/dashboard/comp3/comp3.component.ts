import { Component, OnInit } from '@angular/core';
import { Params,ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  default = true
  activate1 = false
  text = true
   deliveryList : any;
   deliveryFetch : any;
   constructor(private _router:Router, private _activateRoute : ActivatedRoute) { }

   clickHere(example1){
     this.default = false
     this.text = false
     this.activate1 = true
    //  var customer_no = '0000000011'

    const myHeaders = new Headers();
      myHeaders.append("Content-Type","application/json");
      console.log(localStorage.getItem('username'));
      const raw = JSON.stringify({CUSTOMER_ID:localStorage.getItem('username'),SALESDOC_NO:example1,type:this._activateRoute.snapshot.params.type});
      // console.log(raw);
      let requestOptions = {
              method : 'POST',
              headers : myHeaders,
              body : raw,
              redirect : 'follow',
      }
      fetch("http://localhost:3000/fetdelivery",requestOptions as Params).then(response=>response.json()).then(
        result=>{
          this.deliveryFetch=result.item;
          console.log(this.deliveryFetch);
        }).catch(error=>console.log("The error is ",error));
  }

  ngOnInit(): void {
    // var customer_no = '0000000011'

    const myHeaders = new Headers();
    console.log(localStorage.getItem('username'));
      myHeaders.append("Content-Type","application/json");
      const raw = JSON.stringify({CUSTOMER_ID:localStorage.getItem('username'),type:this._activateRoute.snapshot.params.type});
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

// deliveryFetch : any;
//   constructor(private _router:Router, private _activateRoute : ActivatedRoute) { }

//   ngOnInit(): void {
//     var customer_no = 'ABC'
//     var salesdoc_no = '0080000202'

//     const myHeaders = new Headers();
//       myHeaders.append("Content-Type","application/json");
//       const raw = JSON.stringify({CUSTOMER_ID:customer_no,SALESDOC_NO:salesdoc_no,type:this._activateRoute.snapshot.params.type});
//       // console.log(raw);
//       let requestOptions = {
//               method : 'POST',
//               headers : myHeaders,
//               body : raw,
//               redirect : 'follow',
//       }
//       fetch("http://localhost:3000/fetdelivery",requestOptions as Params).then(response=>response.json()).then(
//         result=>{
//           this.deliveryFetch=result.item;
//           console.log(this.deliveryFetch);
//         }).catch(error=>console.log("The error is ",error));
//   }

// }
