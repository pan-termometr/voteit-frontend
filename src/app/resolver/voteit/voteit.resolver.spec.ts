import { TestBed } from '@angular/core/testing';

import { VoteitResolver } from './voteit.resolver';

describe('VoteitResolver', () => {
  let resolver: VoteitResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(VoteitResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
