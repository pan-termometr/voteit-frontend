import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteitRelatedComponent } from './voteit-related.component';

describe('VoteitRelatedComponent', () => {
  let component: VoteitRelatedComponent;
  let fixture: ComponentFixture<VoteitRelatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteitRelatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteitRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
