import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ManageService {
  constructor(
    private http: HttpClient
  ) { }
  baseUrl: string = 'http://localhost/cmsapinew/';
 
  get_certificate_by_certificate_no(data:any){
    return this.http.post<any>(this.baseUrl + 'get_certificate_by_certificate_no_verify.php',data)
  }
}
