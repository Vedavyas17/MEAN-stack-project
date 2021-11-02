import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-emp4',
  templateUrl: './emp4.component.html',
  styleUrls: ['./emp4.component.css']
})
export class Emp4Component implements OnInit {

  constructor(private _auth: AuthService) { }
  onClick() {
    this._auth.logout()
  }

  ngOnInit(): void {
  }

}
