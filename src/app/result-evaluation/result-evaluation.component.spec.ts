import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultEvaluationComponent } from './result-evaluation.component';

describe('ResultEvaluationComponent', () => {
  let component: ResultEvaluationComponent;
  let fixture: ComponentFixture<ResultEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultEvaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
