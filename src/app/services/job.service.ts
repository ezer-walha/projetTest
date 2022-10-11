import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Observable} from "rxjs";
import { Jobs } from '../models/jobs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private SERVER_URL = environment.serverUrl;
  constructor(private http: HttpClient) { }

  /* this is to fetch all Jobs from the back end server */
  getAllJobs(limitOfResults=6): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + 'getAllJobs', {
      params: {
        limit: limitOfResults.toString()
      }
    });
  }

  /* get single product from the serve */
  getSingleJobs(id: Number): Observable<any> {
    return this.http.get<any> (this.SERVER_URL + 'findJobs/'+ id);
  }

  getSingleJobsByJob_titleAndLocation(job_title :String,location:String ): Observable<any> {
    return this.http.get<any> (this.SERVER_URL + 'findJobJL/'+ job_title + '/' + location );
  }

  getSingleJobsByJob_title(job_title :String): Observable<any> {
    return this.http.get<any> (this.SERVER_URL + 'findJob/'+ job_title );
  }

  public postJob(job : Jobs){
    return this.http.post(this.SERVER_URL+"postJob/",job,{responseType:'text' as 'json'});
  }

  public changeJob(job : Jobs){
    return this.http.post(this.SERVER_URL+"changeJ/",job ,{responseType:'text' as 'json'});
  }

  public deleteUser(id: Number): Observable<any>{
    return this.http.delete(this.SERVER_URL+"canceljob/"+id);
  }


}
