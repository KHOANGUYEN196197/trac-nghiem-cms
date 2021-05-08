import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningInformationComponent } from './learning-information.component';

describe('LearningInformationComponent', () => {
  let component: LearningInformationComponent;
  let fixture: ComponentFixture<LearningInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
