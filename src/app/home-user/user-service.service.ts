import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  API_URL : string = "http://localhost:3000"

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) { }

  getAllPosts() {
    const token = this.localStorageService.getToken();
    const headers = { 'Authorization': `${token}` }; 
    
    return this.http.get(`${this.API_URL}/post`, {headers});
  }
}
