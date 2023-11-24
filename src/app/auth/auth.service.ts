import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  register(user : any){   
    const formData = new FormData();    
    formData.append('name', user.name);
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('profilePic', user.profilePic);
    formData.append('phone', user.phone);
    formData.append('birthDate',user.birthDate);
    formData.append('governorate',user.governorate);
    if (!user.isCompany){
      formData.append('resume',user.resume);
    }
    formData.append('links',JSON.stringify(user.links));
    user.isCompany ? formData.append('role','company') : formData.append('role','user')
    
    return this.http.post(this.API_URL+"/auth/register",formData);
  }

  verify(token : string){
    return this.http.get(this.API_URL+"/auth/verify/"+token);
  }

  login(loginCredentials : {email : string, password: string}){
    return this.http.post(this.API_URL+"/auth/login",loginCredentials);
  }
}
