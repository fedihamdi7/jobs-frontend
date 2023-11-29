import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment.prod';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  API_URL = environment.apiUrl;
  headers = { 'Authorization': `${this.localStorageService.getToken()}` }; 
  constructor(
    private http:HttpClient,
    private localStorageService: LocalStorageService
  ) { }

  getCompany(id) {    
    return this.http.get(`${this.API_URL}/user/${id}`, {headers:this.headers});
  }

  updateCompany(id, company) {
    console.log(company);
    if (company.password === null) {
      delete company.password;
    }
    return this.http.patch(`${this.API_URL}/user/${id}`, company, {headers:this.headers});
  }
}
