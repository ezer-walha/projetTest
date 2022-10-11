import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidature } from 'src/app/models/candidature';
import { CandidatureService } from 'src/app/services/candidature.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  candidats: Candidature[] = [];

  constructor(private candidatService: CandidatureService, private router: Router) { }

  ngOnInit(): void {
    this.getCandidats();
  }

  getCandidats(): void {
    this.candidatService.getCandidats().subscribe(data => this.candidats = data)
  }
  goto(id: any) {
    this.router.navigate([`/candidature-details/${id}`])

  }
}
