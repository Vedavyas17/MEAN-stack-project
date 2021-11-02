import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { first } from 'rxjs/operators';
 
@Component({
  selector: 'app-signing',
  templateUrl: './signing.component.html',
  styleUrls: ['./signing.component.css']
})
export class SigningComponent implements OnInit {
  public username:string
  public password:string
  public error:string
  loginForm=this.formbuilder.group({
    username:'',
    password:'',
  })
  constructor(private auth: AuthService, private router: Router, private formbuilder: FormBuilder) { }


  submit2() {
    localStorage.setItem('username', this.username);
    console.log(localStorage.getItem('username'));
    this.auth.login(this.username.toUpperCase(),this.password)

      .pipe(first())
      .subscribe(
        result => this.router.navigate(['/start']),
        err => this.error="*Incorrect password or customer-id"
      );
  }
  ngOnInit(): void {
  }

}
