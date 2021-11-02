import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor() { }
  upd(options){
    return fetch("http://localhost:8000/emp/edit",options);
  }
}
