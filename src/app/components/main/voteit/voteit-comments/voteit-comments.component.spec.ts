import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteitCommentsComponent } from './voteit-comments.component';

describe('VoteitCommentsComponent', () => {
  let component: VoteitCommentsComponent;
  let fixture: ComponentFixture<VoteitCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteitCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteitCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
