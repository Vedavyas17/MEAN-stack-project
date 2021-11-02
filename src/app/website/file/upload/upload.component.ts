import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../auth.service';
import * as XLSX from 'ts-xlsx';
import { Params, ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
 /* uploadedFiles: Array<File>;


  constructor(private http: HttpClient, private auth: AuthService) { }

  ngOnInit(): void {
  }
  logout() {
    this.auth.logout()


  }
  fileChange(element) {
    this.uploadedFiles = element.target.files;
  }

  upload() {
    let formData = new FormData();
    for (var i = 0; i < this.uploadedFiles.length; i++) {
      formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
    }
    this.http.post('api/upload', formData)
      .subscribe((response) => {
        console.log('response receved is ', response);
      })
  }
}*/
 uploadedFiles: Array<File>;
 def=true
 act=false

 dataUpload : any ;
 datafile : any
  constructor(private http: HttpClient, private _auth: AuthService, private _router: Router, private _activateRoute: ActivatedRoute) { }

  arrayBuffer: any;
  file: File;
  incomingfile(event) {
    this.file = event.target.files[0];
  }
  Upload2() {
    let fileReader = new FileReader();

    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));
      
    }
    fileReader.readAsArrayBuffer(this.file);
    this.def = true
      this.act = true
  }

  ngOnInit(): void {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log(localStorage.getItem('username'));
    const raw = JSON.stringify({type: this._activateRoute.snapshot.params.type });
    // console.log(raw);
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    }
    fetch("http://localhost:3000/masterdataupload", requestOptions as Params).then(response => response.json()).then(
      result => {
        this.dataUpload = result;
        console.log(this.dataUpload);
      }).catch(error => console.log("The error is ", error));
  }
  onClick(){
    this._auth.logout()
  }
//   fileChange(element) {
//     this.uploadedFiles = element.target.files;
//   }

//   upload() {
//     let formData = new FormData();
//     for (var i = 0; i < this.uploadedFiles.length; i++) {
//       formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
//     }
//     this.http.post('api/upload', formData)
//       .subscribe((response) => {
//         console.log('response receved is ', response);
//       })
//   }


}