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
 
  get_certificate() {
    return this.http.get<[]>(this.baseUrl + 'certificate_view.php')
  }
}
