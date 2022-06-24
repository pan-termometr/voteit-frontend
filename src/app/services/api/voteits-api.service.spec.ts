import { TestBed } from '@angular/core/testing';

import { VoteitsApiService } from './voteits-api.service';

describe('VoteitsApiService', () => {
  let service: VoteitsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoteitsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
