import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteitComponent } from './voteit.component';

describe('VoteitComponent', () => {
  let component: VoteitComponent;
  let fixture: ComponentFixture<VoteitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteitComponent ]
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
