import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendingService {

  constructor() { }
  upd(options){
    return fetch("http://localhost:8000/vendor/upd",options);
  }
}
