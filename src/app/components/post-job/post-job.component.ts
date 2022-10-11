import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
  postjob!:FormGroup;
  message: any;
  job: any;

  types = [
    { id: 1, name: "Full Time" },
    { id: 2, name: "Part Time" }
  ];

  constructor(private formBuilder:FormBuilder,
              private JobService:JobService,
              private router: Router) { }

  ngOnInit(): void {
    this.postjob=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      job_title:['',[Validators.required]],
      location:['',[Validators.required]],
      job_type:['',[Validators.required]],  
      job_descrip:['',[Validators.required]],
      company_name:['',[Validators.required]],
      //tagline:['',[Validators.required]],
      website:[''],
      logo:['']
    })
  }

  savejob(){
    console.log('savejob',this.postjob.value);
    this.job = this.postjob.value;
    let resp = this.JobService.postJob(this.job);
    
    resp.subscribe(data => {
      this.message = data;
      console.log(this.message);
     this.router.navigate(["browser-job"])
    });
  }

}