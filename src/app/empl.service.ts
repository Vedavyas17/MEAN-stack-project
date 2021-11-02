import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmplService {

  constructor() { }
  upd(options){
    return fetch("http://localhost:8000/emp/lcreate",options);
  }
}
