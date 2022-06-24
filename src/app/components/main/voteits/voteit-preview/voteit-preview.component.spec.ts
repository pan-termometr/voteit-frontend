import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteitPreviewComponent } from './voteit-preview.component';

describe('VoteitComponent', () => {
  let component: VoteitPreviewComponent;
  let fixture: ComponentFixture<VoteitPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteitPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteitPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
