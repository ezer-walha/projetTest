import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidatureService } from 'src/app/services/candidature.service';

@Component({
  selector: 'app-candidature-spontanee',
  templateUrl: './candidature-spontanee.component.html',
  styleUrls: ['./candidature-spontanee.component.css']
})
export class CandidatureSpontaneeComponent implements OnInit {
  candidature!:FormGroup;
  candidat: any;
  message: any;


  constructor(private formBuilder:FormBuilder, private CandidatureService: CandidatureService, private router: Router) { }

  ngOnInit(): void {
    this.candidature=this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      photo: ['', [Validators.required]],
      job_title: ['', [Validators.required]],
      linkedIn: ['', [Validators.required]],
      cv: ['', [Validators.required]],
      coverLettre: ['', [Validators.required]]
      
      
    })
  }

  apply(){
    console.log('apply',this.candidature.value);
    this.candidat = this.candidature.value;
    console.log(this.candidat);
    this.CandidatureService.addCandidature(this.candidat)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['candidate'])
        });
  }


}