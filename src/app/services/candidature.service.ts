import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Candidature } from '../models/candidature';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {

  private SERVER_URL = environment.serverUrl;

  constructor(private http:HttpClient) { }

  getCandidats(): Observable<any[]> {
    return this.http.get<any[]>(this.SERVER_URL + 'getAllCandidature/');
  }

  getCandidatsbymail(mail : String): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + 'findCandidat/'+ mail);
  }

  getCandidatsmailById(id : Number): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + 'findCandidatM/'+ id);
  }

  sendmail(mail : String, content: String , mailcondi : String): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + 'sendMail/'+ mail + "/" + content + "/"+ mailcondi);
  }

  getCandidat(id: any): Observable<any> {
    //`${this.heroesUrl}/${id}`
    const url = `${this.SERVER_URL}${id}`;
    return this.http.get<any>(url)
  }

  public addCandidature(candidat : Candidature) {
    return this.http.post(this.SERVER_URL+'apply/',candidat);
  }

  public deleteCandidat(id: Number): Observable<any>{
    return this.http.delete(this.SERVER_URL+"Candidatures/"+id);
  }


}
