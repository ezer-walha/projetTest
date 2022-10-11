import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Candidature } from 'src/app/models/candidature';
import { CandidatureService } from 'src/app/services/candidature.service';

@Component({
  selector: 'app-candidature-details',
  templateUrl: './candidature-details.component.html',
  styleUrls: ['./candidature-details.component.css']
})
export class CandidatureDetailsComponent implements OnInit {

  //CandidateForm2 !: FormGroup;
  id: any
  candidat: Candidature | undefined;




  CandidateForm !:FormGroup;

  //mailCondidat : String = "walhaezer99@gmail.com" ;
  mailCondidatByid : String = "" ;
  message: any;

  constructor(private formBuilder:FormBuilder,
              private route: ActivatedRoute,
              private CandidateService:CandidatureService,) { }

  ngOnInit(): void {
    this.CandidateForm=this.formBuilder.group({
      mail:['',[Validators.required,Validators.email]],
      textarea:['',[Validators.required,Validators.email]],
    })
    this.getCandidat();
    this.id = this.route.snapshot.paramMap.get('id')
    console.log(this.id);
    this.CandidateService.getCandidat(this.id)
      .subscribe(data =>{this.candidat = data; this.mailCondidatByid=this.candidat!.email;} );
  }

  send(){
    console.log('sendToCandidate',this.CandidateForm.value);
    let resp = this.CandidateService.sendmail(this.CandidateForm.value.mail,this.CandidateForm.value.textarea,this.mailCondidatByid);
    
    resp.subscribe(data => {
      this.message = data;
      console.log(this.message);
     //this.router.navigate(["browser-job"])
     alert("mail send succes !")
    });
  }

  getCandidat(): void {
    const id = this.route.snapshot.paramMap.get('id');

  }

}
