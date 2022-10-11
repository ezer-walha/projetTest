import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  private SERVER_URL = environment.serverUrl;

  constructor(private http:HttpClient) { }

  public doRegistration(user : User){
    return this.http.post(this.SERVER_URL+"register",user,{responseType:'text' as 'json'});
  }
  
  public getUsers(): Observable<any>{
    return this.http.get(this.SERVER_URL+"getAllUsers");
  }

  public getUserByEmail(email : String){
    return this.http.get(this.SERVER_URL+"findUser/"+email);
  }

  public changepwdUser(user : User){
    return this.http.post(this.SERVER_URL+"change/",user ,{responseType:'text' as 'json'});
  }

  // public changemailUser(user : User){
  //   return this.http.post(this.SERVER_URL+"changeM/",user ,{responseType:'text' as 'json'});
  // }

  // public changeroleUser(user : User){
  //   return this.http.post(this.SERVER_URL+"changeR/",user ,{responseType:'text' as 'json'});
  // }

  public deleteUser(id: Number): Observable<any>{
    return this.http.delete(this.SERVER_URL+"cancel/"+id);
  }

  login(user : User){
    return this.http.post(this.SERVER_URL+"login/",user,{responseType:'text' as 'json'});
  }

}
