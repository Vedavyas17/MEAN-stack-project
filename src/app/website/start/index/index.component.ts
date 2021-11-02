import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  // constructor() { }
  constructor(private _auth:AuthService) { }
   onClick(){
     this._auth.logout()
   }
  ngOnInit(): void {
  }

}
