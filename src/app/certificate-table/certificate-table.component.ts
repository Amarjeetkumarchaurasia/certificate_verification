import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-certificate-table',
  templateUrl: './certificate-table.component.html',
  styleUrls: ['./certificate-table.component.css']
})
export class CertificateTableComponent {
img_url :string = 'https://greensoft.net.in/gscms/assets/certificate/'
certificate_data:any
constructor(
  private router: Router

){
 const logindata = this.router.getCurrentNavigation()
  this.certificate_data = logindata?.extras
 
}
download(){
  window.print()
}

}
