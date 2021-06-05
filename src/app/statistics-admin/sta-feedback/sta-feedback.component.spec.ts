import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaFeedbackComponent } from './sta-feedback.component';

describe('StaFeedbackComponent', () => {
  let component: StaFeedbackComponent;
  let fixture: ComponentFixture<StaFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
