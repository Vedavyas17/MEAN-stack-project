import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-financing',
  templateUrl: './financing.component.html',
  styleUrls: ['./financing.component.css']
})
export class FinancingComponent implements OnInit {

  default = true
  Invoicedetails = false
  Paymentsandaging = false
  CreditDebitmemo = false
  Overallsalesdata = false

  constructor(private _auth:AuthService , private _router: Router) { }
  activateivd() {
    this.default = false
    this.Invoicedetails = true
    this.Paymentsandaging = false
    this.CreditDebitmemo = false
    this.Overallsalesdata = false

  }
  activatepa() {
    this.default = false
    this.Invoicedetails = false
    this.Paymentsandaging = true
    this.CreditDebitmemo = false
    this.Overallsalesdata = false

  }

  activatecdm() {
    this.default = false
    this.Invoicedetails = false
    this.Paymentsandaging = false
    this.CreditDebitmemo = true
    this.Overallsalesdata = false

  }
  activateosd() {
    this.default = false
    this.Invoicedetails = false
    this.Paymentsandaging = false
    this.CreditDebitmemo = false
    this.Overallsalesdata = true

  }

  onClick(){
    this._auth.logout()
    // this._router.navigateByUrl(['/signin'])
  }
  ngOnInit(): void {
  }

}
