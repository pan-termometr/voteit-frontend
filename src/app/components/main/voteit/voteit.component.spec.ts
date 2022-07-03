import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { VoteitCommentsComponent } from './voteit-comments/voteit-comments.component';
import { VoteitDetailsComponent } from './voteit-details/voteit-details.component';
import { VoteitRelatedComponent } from './voteit-related/voteit-related.component';

import { VoteitComponent } from './voteit.component';

describe('VoteitComponent', () => {
  let component: VoteitComponent;
  let fixture: ComponentFixture<VoteitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteitComponent, VoteitDetailsComponent, VoteitRelatedComponent, VoteitCommentsComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
