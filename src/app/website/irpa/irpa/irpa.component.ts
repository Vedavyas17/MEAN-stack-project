import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-irpa',
  templateUrl: './irpa.component.html',
  styleUrls: ['./irpa.component.css']
})
export class IrpaComponent implements OnInit {

  constructor(private _auth:AuthService) { }
  onClick(){
    this._auth.logout()
  }

  ngOnInit(): void {
  }

}
