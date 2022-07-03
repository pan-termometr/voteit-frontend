import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { VoteitsResolver } from './voteits.resolver';

describe('VoteitsResolver', () => {
  let resolver: VoteitsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    resolver = TestBed.inject(VoteitsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
