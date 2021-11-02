import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public temp: string

  constructor(private http: HttpClient) { }
  login(username: string, password: string): Observable<boolean> {
    return this.http.post<{ token: string }>('http://localhost:3000/users/login', { name: username, password: password })
      .pipe(
        map(result => {
          localStorage.setItem('access_token', result.token);
          return true;
        })
      );
  }

  login1(vendorid: string, password: string): Observable<boolean> {
    return this.http.post<{ token: string }>('http://localhost:3000/vendor/login', { vendorid: vendorid, password: password })
      .pipe(
        map(result => {
          localStorage.setItem('access_token', result.token);
          return true;
        })
      );
  }

  login2(employeeid: string, password: string): Observable<boolean> {
    return this.http.post<{ token: string }>('http://localhost:3000/employee/login', { employeeid: employeeid, password: password })
      .pipe(
        map(result => {
          localStorage.setItem('access_token', result.token);
          return true;
        })
      );
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }

//   profileupdate(username: string, phone: string, address: string): Observable<boolean> {
//     return this.http.post<{ token: string }>('http://localhost:4000/api/profileupdate', { username: username, phone: phone, address: address })
//       .pipe(
//         map(result => {
//           localStorage.setItem('profile', result.token);
//           return true;
//         })
//       );
//   }
//   test(username: string) {
//     console.log("in service");
//     return this.http.post<{ t: string }>('http://localhost:4000/api/profile', { username: username })
//       .pipe(
//         map(result => {
//           localStorage.setItem('access_token', result.t);
//           console.log(result.t);
//           return true;
//         })
//       );
//   }
//   test2(username: string) {
//     this.http.post<any>('http://localhost:4000/api/profile', { username: username }).subscribe(data => {
//       this.temp = data
//       console.log("object");
//       console.log(this.temp);
//     })
//   }

}
