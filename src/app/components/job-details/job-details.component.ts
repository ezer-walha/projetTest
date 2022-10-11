import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { Jobs } from 'src/app/models/jobs' ;
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidatureService } from 'src/app/services/candidature.service';
import { JobsCandidaturesService } from 'src/app/services/jobs-candidatures.service';
import { JobCandidature } from 'src/app/models/job-candidature';
import { Candidature } from 'src/app/models/candidature';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  candidature!:FormGroup;
  candidat:any;
  message: any;

  //jobs: Jobs[]=[];
  job: Jobs={} as Jobs ; 

  idCandidat:number=5 ;

  jobCandidature :JobCandidature ={} as JobCandidature  ;

  candidates:Candidature[]=[];

  constructor(private route: ActivatedRoute,
              private formBuilder:FormBuilder,
              private CandidatureService:CandidatureService,
              private JobService:JobService,
              private JobCandidat: JobsCandidaturesService) { }

  ngOnInit(): void {
    this.getSingleJob();
    this.getJobCandidats();
    this.candidature=this.formBuilder.group({
      name:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      photo:['',[Validators.required]],
      job_title:['',[Validators.required]],
      linkedIn:['',[Validators.required]],
      cv:['',[Validators.required]],
      coverLettre:['',[Validators.required]]

      
    })
  }

  // getJobs(){
  //   let resp=this.JobService.getAllJobs();
  //   resp.subscribe(data=>{this.jobs=data;
  //     console.log(this.jobs);});
  // }

  getSingleJob(){
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    let resp=this.JobService.getSingleJobs(id);
    resp.subscribe(data=>{this.job=data;
      console.log(this.job);
      console.log(this.job.logo);});
  }

  apply() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.candidat = this.candidature.value;


    // this.CandidatureService.addCandidature(this.candidat)
    //       .subscribe (
    //         data => {
    //           console.log(data);
    //               //this.router.navigate(['candidate'])
    //    });


       this.CandidatureService.getCandidatsbymail(this.candidat.email)
     .subscribe (data => {
                        console.log(data);
                        this.idCandidat = data;
                        console.log('ici',this.idCandidat);
            //this.router.navigate(['candidate'])
          if (this.idCandidat == null  ){
            this.CandidatureService.addCandidature(this.candidat)
            .subscribe (
            data => {
              console.log(data);
                  //this.router.navigate(['candidate'])
       });
          }

          this.CandidatureService.getCandidatsbymail(this.candidat.email)
     .subscribe (data => {
                        console.log(data);
                        this.idCandidat = data;
                        console.log('ici3333333',this.idCandidat);
            //this.router.navigate(['candidate'])

                     this.jobCandidature ={
                        jobsId:id,
                        candidaturesId:this.idCandidat,
                        };
            this.JobCandidat.saveCandJob(this.jobCandidature).subscribe(data=>{
              console.log(data);
              });            
      });

          
                     
                      
      });
    
    
    // console.log(this.candidat.email);

    //  this.CandidatureService.getCandidatsbymail(this.candidat.email)
    //  .subscribe (data => {
    //                     console.log(data);
    //                     this.idCandidat = data;
    //                     console.log('ici',this.idCandidat);
    //         //this.router.navigate(['candidate'])

    //                  this.jobCandidature ={
    //                     jobsId:id,
    //                     candidaturesId:this.idCandidat,
    //                     };
    //         this.JobCandidat.saveCandJob(this.jobCandidature).subscribe(data=>{
    //           console.log(data);
    //           });            
    //   });
    //   // here ........
      
    this.getJobCandidats();
      
    }

    getJobCandidats(){
      const id =parseInt(this.route.snapshot.paramMap.get('id')!, 10);
      this.JobCandidat.getJobCandidats(id).subscribe(data=>{
        console.log('hhiiiiiii',data);
        this.candidates=data;

        });  
    }

    

}
