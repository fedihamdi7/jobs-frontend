import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment.prod';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class NegotiationService {
  API_URL = environment.apiUrl;
  headers = { 'Authorization': `${this.localStorageService.getToken()}` }; 

  constructor(
    private http:HttpClient,
    private localStorageService: LocalStorageService

  ) { }

  userAccept(negotiation){
    negotiation.post_id = negotiation.post_id._id;
    negotiation.company_id = negotiation.company_id._id;
    
    return this.http.post(`${this.API_URL}/negotiation/accept`, negotiation, {headers: this.headers});
  }
}
