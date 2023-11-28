import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment.prod';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  API_URL = environment.apiUrl;
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) { }

  addPost(post: any) {
    const headers = {
      'Authorization': `${this.localStorageService.getToken()}`,
    };

    return this.http.post(this.API_URL + '/post', post, { headers: headers });
  }
  applyToPost(userId: string, postId: string) {
    const headers = {
      'Authorization': `${this.localStorageService.getToken()}`,
      'user_id': `${userId}`
    };
   
    return this.http.post(this.API_URL + '/post/apply/' + postId,{}, { headers: headers });
  }

  findAllPostsOfCompany(companyId: string) {
    const headers = {
      'Authorization': `${this.localStorageService.getToken()}`,
    };
    return this.http.get(this.API_URL + '/post/user/' + companyId,{ headers: headers });
  }
}
