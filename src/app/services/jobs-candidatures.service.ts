import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { JobCandidature } from '../models/job-candidature';

@Injectable({
  providedIn: 'root'
})
export class JobsCandidaturesService {

  private SERVER_URL = environment.serverUrl;
  constructor(private http: HttpClient) { }

  public saveCandJob(cand :JobCandidature){
    return this.http.post(this.SERVER_URL+"save/",cand,{responseType:'text' as 'json'});
  }

  getJobCandidats(id: Number) : Observable<any>{
    return this.http.get (this.SERVER_URL + "getAllCandidate/"+ id);
  }
}
