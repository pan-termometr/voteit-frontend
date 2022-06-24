import { TestBed } from '@angular/core/testing';

import { VoteitsService } from './voteits.service';

describe('VoteitsService', () => {
  let service: VoteitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoteitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
