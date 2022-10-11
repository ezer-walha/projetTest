import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { Jobs } from 'src/app/models/jobs' ;

@Component({
  selector: 'app-browser-job',
  templateUrl: './browser-job.component.html',
  styleUrls: ['./browser-job.component.css']
})
export class BrowserJobComponent implements OnInit {

  jobs: Jobs[]=[];

  constructor(private JobService:JobService) { }

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs(){
    let resp=this.JobService.getAllJobs();
    resp.subscribe(data=>{this.jobs=data;
      console.log(this.jobs);});
  }

}
