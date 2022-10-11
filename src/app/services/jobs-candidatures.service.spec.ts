import { TestBed } from '@angular/core/testing';

import { JobsCandidaturesService } from './jobs-candidatures.service';

describe('JobsCandidaturesService', () => {
  let service: JobsCandidaturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobsCandidaturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
