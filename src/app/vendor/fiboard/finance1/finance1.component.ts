import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-finance1',
  templateUrl: './finance1.component.html',
  styleUrls: ['./finance1.component.css']
})
export class Finance1Component implements OnInit {

  constructor(private _auth:AuthService) { }
  onClick(){
    this._auth.logout()
  }
  ngOnInit(): void {
  }

}
