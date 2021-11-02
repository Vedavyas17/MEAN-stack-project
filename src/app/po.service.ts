import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoService {

  constructor() { }
  upd(options){
    return fetch("http://localhost:8000/vendor/pocreate",options);
  }
}
