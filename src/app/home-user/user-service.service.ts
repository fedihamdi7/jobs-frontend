import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from '../shared/local-storage.service';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  API_URL = environment.apiUrl;
  headers = { 'Authorization': `${this.localStorageService.getToken()}` }; 

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) { }

  getAllPosts() {
    return this.http.get(`${this.API_URL}/post`, {headers:this.headers});
  }

  getNegotiations() {    
    return this.http.get(`${this.API_URL}/negotiation/getNegotiationsByUser`, {headers:this.headers});
  }
}
