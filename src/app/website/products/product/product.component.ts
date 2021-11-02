import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { AuthService } from '../../../auth.service';
import { SalesService } from '../../../sales.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  uploadedFiles: Array<File>;
  activate = true;
  act = false

  constructor(private activateRouter: ActivatedRoute,private data:SalesService, private router: Router) { }

  ngOnInit(): void {
  }
  hide=true;
  onClick(){

    this.activate = true;
    this.act = true;
    let cno = (document.getElementById("cno") as HTMLInputElement).value;
    let fname = (document.getElementById("name1") as HTMLInputElement).value;
    // let lname = (document.getElementById("name2") as HTMLInputElement).value;
    let address = (document.getElementById("address") as HTMLInputElement).value;
    let city = (document.getElementById("city") as HTMLInputElement).value;
    let reg = (document.getElementById("reg") as HTMLInputElement).value;
    // let ltname = (document.getElementById("ltname") as HTMLInputElement).value;
    let pincode = (document.getElementById("pincode") as HTMLInputElement).value;
    let state = (document.getElementById("state") as HTMLInputElement).value;
    let phone = (document.getElementById("phone") as HTMLInputElement).value;
    // let channel = (document.getElementById("channel") as HTMLInputElement).value;
    // console.log(city);
    // console.log(vendorid);


  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const raw = JSON.stringify({ "kunnr":localStorage.getItem('username'),"name" : fname , "adrnr" : address , "ort01" : city, "pstlz" : pincode , "regio" : reg, "stras":state,"telf1" : phone , type:this.activateRouter.snapshot.params.type});
  const options = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  console.log(options);

this.data.upd(options).then((response) => {
  response.json().then((res) => {


      localStorage.setItem("secret",res.accessToken);
      //this.router.navigateByUrl('/customer/dashboard');


  })
})


}


}
