import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public vendorid:string
  public password:string
  public error:string
  loginForm=this.formbuilder.group({
    vendorid:'',
    password:'',
  })
  constructor(private auth: AuthService, private router: Router, private formbuilder: FormBuilder) { }


  submit2() {
    localStorage.setItem('vendorid', this.vendorid);
    console.log(localStorage.getItem('vendorid'));
    this.auth.login1(this.vendorid.toUpperCase(),this.password.toUpperCase())

      .pipe(first())
      .subscribe(
        result => this.router.navigate(['/vendorboard']),
        err => this.error="*Incorrect password or vendor-id"
      );
  }
  ngOnInit(): void {
  }

}
