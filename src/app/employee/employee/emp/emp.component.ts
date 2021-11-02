import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  public employeeid:string
  public password:string
  public error:string
  loginForm=this.formbuilder.group({
    employeeid:'',
    password:'',
  })
  constructor(private auth: AuthService, private router: Router, private formbuilder: FormBuilder) { }


  submit2() {
    localStorage.setItem('employeeid', this.employeeid);
    console.log(localStorage.getItem('employeeid'));
    this.auth.login2(this.employeeid,this.password.toUpperCase())

      .pipe(first())
      .subscribe(
        result => this.router.navigate(['/empboard']),
        err => this.error="*Incorrect password or Employee-id"
      );
  }
  ngOnInit(): void {
  }

}

