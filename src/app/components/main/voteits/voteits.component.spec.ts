import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UrlTitlePipe } from 'src/app/pipe/url-title.pipe';
import { VoteitPreviewComponent } from './voteit-preview/voteit-preview.component';

import { VoteitsComponent } from './voteits.component';

describe('VoteitsComponent', () => {
  let component: VoteitsComponent;
  let fixture: ComponentFixture<VoteitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteitsComponent, VoteitPreviewComponent, UrlTitlePipe ],
      imports: [RouterTestingModule]
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
