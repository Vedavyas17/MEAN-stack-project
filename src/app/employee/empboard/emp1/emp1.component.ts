import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-emp1',
  templateUrl: './emp1.component.html',
  styleUrls: ['./emp1.component.css']
})
export class Emp1Component implements OnInit {

  info: any
  getinfo: any
  s:any
  
  constructor(private _router: Router, private _activateRoute: ActivatedRoute, private _auth: AuthService) { }
  onClick() {
    this._auth.logout()
  }

  
  
  ngOnInit(): void {
    // this.user = true
    let s = document.createElement('script');
 s.setAttribute('src','https://cdn.cai.tools.sap/webchat/webchat.js');
 s.setAttribute('channelId','fa824d77-568d-4ce2-a3cd-6f143333e74e');
 s.setAttribute('token','3d646c2ce8c66f55d7a5611f2d3e6199');
 s.setAttribute('id','cai-webchat');
 document.body.appendChild(s);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log(localStorage.getItem('employeeid'));
    const raw = JSON.stringify({ employeeid: localStorage.getItem('employeeid'), type: this._activateRoute.snapshot.params.type });
    // console.log(raw);
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    }
    fetch("http://localhost:3000/emp/getinfo", requestOptions as Params).then(response => response.json()).then(
      result => {
        this.info = result;
        console.log(this.info);
      }).catch(error => console.log("The error is ", error));
  }

}



