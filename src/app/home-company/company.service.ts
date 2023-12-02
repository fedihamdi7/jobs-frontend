import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment.prod';
import { LocalStorageService } from '../shared/local-storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private whenUserApplyNotif : EventSource;

  API_URL = environment.apiUrl;
  headers = { 'Authorization': `${this.localStorageService.getToken()}` }; 
  constructor(
    private http:HttpClient,
    private localStorageService: LocalStorageService
  ) { 
    const user = this.localStorageService.getUser();
    this.whenUserApplyNotif = new EventSource(`${this.API_URL}/post/notification/stream/${user._id}`);
  }

  getCompany(id) {    
    return this.http.get(`${this.API_URL}/user/${id}`, {headers:this.headers});
  }

  updateCompany(id, company) {

    if (company.password === null) {
      delete company.password;
    }
    const formData = new FormData();    
    formData.append('name', company.name);
    formData.append('email', company.email);
    formData.append('password', company.password);
    formData.append('profilePic', company.profilePic);
    formData.append('phone', company.phone);
    formData.append('birthDate',company.birthDate);
    formData.append('governorate',company.governorate);
    formData.append('links',JSON.stringify(company.links));
    return this.http.patch(`${this.API_URL}/user/${id}`, formData, {headers:this.headers});
  }

  getNotificationsStream(): Observable<any> {
    return new Observable<any>((observer) => {
      this.whenUserApplyNotif.onmessage = (event) => {
        observer.next(event.data);
      };
    });
  }

  markNotificationAsSeen(notif_id) {
    return this.http.patch(`${this.API_URL}/post/markNotificationAsSeen/${notif_id}`, {}, {headers:this.headers});
  }
}
