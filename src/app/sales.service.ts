import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor() { }
  upd(options){
    return fetch("http://localhost:8000/users/upd",options);
  }
}
