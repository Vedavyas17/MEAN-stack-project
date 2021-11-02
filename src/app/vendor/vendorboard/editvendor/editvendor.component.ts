import { Component, OnInit } from '@angular/core';
import { VendingService } from '../../../vending.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-editvendor',
  templateUrl: './editvendor.component.html',
  styleUrls: ['./editvendor.component.css']
})
export class EditvendorComponent implements OnInit {

  uploadedFiles: Array<File>;
  activate = true;
  act = false

  constructor(private activateRouter: ActivatedRoute,private data:VendingService, private router: Router) { }


  ngOnInit(): void {
  }
  hide=true;
  onClick(){

    this.activate = true;
    this.act = true;
    let vendor = (document.getElementById("vendor") as HTMLInputElement).value;
    let name1 = (document.getElementById("name1") as HTMLInputElement).value;
    let name2 = (document.getElementById("name2") as HTMLInputElement).value;
    let city = (document.getElementById("city") as HTMLInputElement).value;
    let district = (document.getElementById("district") as HTMLInputElement).value;
    let address = (document.getElementById("address") as HTMLInputElement).value;
    let pincode = (document.getElementById("pincode") as HTMLInputElement).value;
    let country = (document.getElementById("country") as HTMLInputElement).value;
    let phone = (document.getElementById("phone") as HTMLInputElement).value;
    // let tt = (document.getElementById("tt") as HTMLInputElement).value;
    // console.log(city);
    // console.log(localStorage.getItem('vendorid'));


  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  console.log(localStorage.getItem('vendorid'));
  const raw = JSON.stringify({ "vendorid":localStorage.getItem('vendorid'),"city" : city,"district" : district , "name1" : name1, "pincode" : pincode,"address" : address , "phone" : phone,"name2" : name2 , "country" : country,type:this.activateRouter.snapshot.params.type});
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

