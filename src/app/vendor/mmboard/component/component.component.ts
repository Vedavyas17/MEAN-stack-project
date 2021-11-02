import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  constructor(private _auth:AuthService) { }
   onClick(){
     this._auth.logout()
   }

  ngOnInit(): void {
  }

}
