import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  // default = true
  // inquiry = false
  // salesorderdata = false
  // listofdelivery = false
   constructor(private _auth:AuthService) { }
   onClick(){
     this._auth.logout()
   }
  // activateid() {
  //   this.default = false
  //   this.inquiry = true
  //   this.salesorderdata = false
  //   this.listofdelivery = false

  // }
  // activatesod() {
  //   this.default = false
  //   this.inquiry = false
  //   this.salesorderdata = true
  //   this.listofdelivery = false
  // }

  // activatecdm() {
  //   this.default = false
  //   this.inquiry = false
  //   this.salesorderdata = false
  //   this.listofdelivery = true
  // }



  ngOnInit(): void {
  }

}
