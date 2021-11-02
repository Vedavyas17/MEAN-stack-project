import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-vboard1',
  templateUrl: './vboard1.component.html',
  styleUrls: ['./vboard1.component.css']
})
export class Vboard1Component implements OnInit {

  constructor(private _auth:AuthService) { }
  onClick(){
    this._auth.logout()
  }

  ngOnInit(): void {
  }

}
