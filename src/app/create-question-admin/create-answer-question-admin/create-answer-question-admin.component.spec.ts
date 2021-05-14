import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnswerQuestionAdminComponent } from './create-answer-question-admin.component';

describe('CreateAnswerQuestionAdminComponent', () => {
  let component: CreateAnswerQuestionAdminComponent;
  let fixture: ComponentFixture<CreateAnswerQuestionAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAnswerQuestionAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAnswerQuestionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
