import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteitsComponent } from './voteits.component';

describe('VoteitsComponent', () => {
  let component: VoteitsComponent;
  let fixture: ComponentFixture<VoteitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
