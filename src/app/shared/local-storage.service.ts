import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  saveToken(token : string){
    localStorage.setItem('token','Bearer '+ token);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  removeToken(){
    localStorage.removeItem('token');
  }

  saveUser(user : any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  getUser(){
    return JSON.parse(localStorage.getItem('user'));
  }

  removeUser(){
    localStorage.removeItem('user');
  }

  clear(){
    localStorage.clear();
  }
  

}
