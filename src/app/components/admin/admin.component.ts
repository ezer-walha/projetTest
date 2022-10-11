import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from 'src/app/services/user-registration.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { JobService } from 'src/app/services/job.service';
import { Jobs } from 'src/app/models/jobs' ;
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Candidature } from 'src/app/models/candidature';
import { CandidatureService } from 'src/app/services/candidature.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users: User[]=[];
  jobs: Jobs[]=[];

  VarAdmin: String ='user' ;
  VarUserDeleteID: number = 0 ;

  addUser!:FormGroup;
  user:any={};
  message:any;

  user2:any={};
  SelectedUser:any={};
  editUser!:FormGroup;
 

  types = [
    { id: 1, name: "candidat" },
    { id: 2, name: "recruteur" }
  ];

  addJob!:FormGroup;
  job:any={};
  //types2 = [ {name:"Full Time"} , {name:"Part Time"} ];
  types2: any = ['Full Time', 'Part Time'];
  VarJobDeleteID: number = 0 ;

  job2:any={};
  SelectedJob:any={};
  editJob!:FormGroup;


  candidats: Candidature[] = [];
  VarCandidDeleteID: number = 0 ;

  constructor(private RegisterService:UserRegistrationService,
              private JobService:JobService,
              private formBuilder:FormBuilder,
              private candidatService: CandidatureService,
              private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
    this.getJobs();
    this.getCandidats();
    this.addUser=this.formBuilder.group({
      email:[''],
      password:[''],
      role:['']
    });
    this.editUser=this.formBuilder.group({
      email:[''],
      password:[''],
      role:['']
    });
    this.addJob=this.formBuilder.group({
      email:[''],
      job_title:[''],
      location:[''],
      job_type:[''],  
      job_descrip:[''],
      company_name:[''],
      website:[''],
      logo:[''],
    });
    this.editJob=this.formBuilder.group({
      email:[''],
      job_title:[''],
      job_type:[''],  
    })
    
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

  getCandidats(): void {
    this.candidatService.getCandidats().subscribe(data => this.candidats = data)
  }

  deleteCan(id:number){
    this.VarCandidDeleteID = id;
  }

  deleteCandidat(){
    let resp=this.candidatService.deleteCandidat(this.VarCandidDeleteID);
    resp.subscribe(data=>this.candidats=data);
    console.log('hiiiii');
  }

  deleteUsers(){
    let resp=this.RegisterService.deleteUser(this.VarUserDeleteID);
    resp.subscribe(data=>this.users=data);
    console.log('hiiiii');
  }
  
  delete(id:number){
    this.VarUserDeleteID = id;
  }

  userfct(){
    this.VarAdmin="user";
  }
  jobfct(){
    this.VarAdmin="job";
    // this.router.navigate([" "]) ;

  }
  candidatefct(){
    this.VarAdmin="candidate";
  }

  AddUser(){
    console.log('user',this.user);
    //console.log(this.signup.value);
    let resp=this.RegisterService.doRegistration(this.user);
    resp.subscribe( (data)=> { 
        this.message=data ;
        alert('add sucess !');
        this.getUsers();
       //this.router.navigate(['admin']) 
      }); 
  }

  onEdit(user: User){
    this.SelectedUser = user ;
    console.log('selected user',this.SelectedUser);
    this.user2 = this.SelectedUser ;
  }

  changepwd(){
    let resp=this.RegisterService.changepwdUser(this.user2);
    resp.subscribe( (data)=> { 
      this.message=data ;
      console.log('1',this.message);
      //this.getUsers();
     //this.router.navigate(['admin']) 
    });
  }
  // changemail(){
  //   let resp=this.RegisterService.changemailUser(this.user2);
  //   resp.subscribe( (data)=> { 
  //     this.message=data ;
  //     console.log('2',this.message);
  //     //this.getUsers();
  //    //this.router.navigate(['admin']) 
  //   });
  // }
  // changerole(){
  //   let resp=this.RegisterService.changeroleUser(this.user2);
  //   resp.subscribe( (data)=> { 
  //     this.message=data ;
  //     console.log('3',this.message);
  //     //this.getUsers();
  //    //this.router.navigate(['admin']) 
  //   });
  // }

  fcteditUser(){
    //console.log('selected user',this.SelectedUser);
    console.log('edit user',this.user2);
    //this.changemail();
    this.changepwd();
    //this.changerole();
  }

  savejob(){
    console.log('savejob',this.addJob.value);
    this.job = this.addJob.value;
    let resp = this.JobService.postJob(this.job);
    
    resp.subscribe(data => {
      this.message = data;
      alert('add sucess !');
      //console.log(this.message);
      this.getJobs();
     //this.router.navigate(["browser-job"])
    });
  }

  deleteJobs(){
    let resp=this.JobService.deleteUser(this.VarJobDeleteID);
    resp.subscribe(
          data=>{this.users=data;
           this.getJobs();
          });
    console.log('hiiiii');
  }
  
  deletejob(id:number){
    this.VarJobDeleteID = id;
  }

  onEditJob(job: Jobs){
    this.SelectedJob = job ;
    console.log('selected job',this.SelectedJob);
    this.job2 = this.SelectedJob ;
  }

  changejob(){
    let resp=this.JobService.changeJob(this.job2);
    resp.subscribe( (data)=> { 
      this.message=data ;
      console.log('1',this.message);
      alert('job edited')
      //this.getUsers();
     //this.router.navigate(['admin']) 
    });
  }

  fcteditJob(){
    //console.log('selected user',this.SelectedUser);
    console.log('edit job',this.job2);
    //this.changemail();
    this.changejob();
    //this.changerole();
  }

}
