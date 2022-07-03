import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteitDetailsComponent } from './voteit-details.component';

describe('VoteitDetailsComponent', () => {
  let component: VoteitDetailsComponent;
  let fixture: ComponentFixture<VoteitDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteitDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
