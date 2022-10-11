import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from 'src/app/services/user-registration.service';
import { JobService } from 'src/app/services/job.service';
import { Jobs } from 'src/app/models/jobs' ;
import { FormBuilder, FormGroup } from '@angular/forms';
import { Candidature } from 'src/app/models/candidature';
import { CandidatureService } from 'src/app/services/candidature.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:any;
  jobs: Jobs[]=[];
  job: Jobs={} as Jobs ; 

  jobs2: Jobs[]=[];

  FindJob!:FormGroup;
  job3: Jobs={} as Jobs ; 

  candidats: Candidature[] = [];

  // selectedJob :Jobs={} as Jobs ;

  constructor(private RegisterService:UserRegistrationService,
              private JobService:JobService,
              private formBuilder:FormBuilder,
              private candidatService: CandidatureService, ) { }

  ngOnInit(): void {
    this.getJobs();
    this.FindJob=this.formBuilder.group({
      job_title:[''],
      location:[''],  
    })
    this.getCandidats();
  }

  getUsers(){
    let resp=this.RegisterService.getUsers();
    resp.subscribe(data=>this.users=data);
  }

  getJobs(){
    let resp=this.JobService.getAllJobs();
    resp.subscribe(data=>{this.jobs=data;
      console.log(this.jobs);});
  }

  getSingleJob(id: Number){
    let resp=this.JobService.getSingleJobs(id);
    resp.subscribe(data=>{this.job=data;
      console.log(this.job);
      console.log(this.job.logo);});
  }

  getSingleJobByTitle(title: String){
    let resp=this.JobService.getSingleJobsByJob_title(title);
    resp.subscribe(data=>{this.jobs=data;
      console.log(this.jobs);});
  }


  getSingleJobByTitleAndlocation(){
    //this.job3 = this.FindJob.value;
    console.log(this.job3.location)
    if (this.job3.location == undefined && this.job3.job_title == undefined){
      this.getJobs();
    }
    else if (this.job3.location == undefined ){
      this.getSingleJobByTitle(this.job3.job_title);
    }else{
      let resp=this.JobService.getSingleJobsByJob_titleAndLocation(this.job3.job_title,this.job3.location);
      resp.subscribe(data=>{this.jobs=data;
      console.log(this.jobs);});
    }
    this.job3={} as Jobs;
    
  }

  getCandidats(): void {
    this.candidatService.getCandidats().subscribe(data => this.candidats = data)
  }


  // onSelect(job: Jobs): void {
  //   this.selectedJob = job;
  //   //this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }
  // goto(id: any) {
  //   this.router.navigate([`/candidature-details/${id}`])

  // }
  
  // onSelect(job: Jobs): void {
  //   this.selectedJob = job;
  //   //this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }

}
