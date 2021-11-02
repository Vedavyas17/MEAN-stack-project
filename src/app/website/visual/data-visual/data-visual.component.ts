import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-data-visual',
  templateUrl: './data-visual.component.html',
  styleUrls: ['./data-visual.component.css']
})
export class DataVisualComponent implements OnInit {

  constructor(private _auth:AuthService) { }
  onClick(){
    this._auth.logout()
  }

  ngOnInit(): void {
  }

}
