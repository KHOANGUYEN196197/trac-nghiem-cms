import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultSubjectComponent } from './result-subject.component';

describe('ResultSubjectComponent', () => {
  let component: ResultSubjectComponent;
  let fixture: ComponentFixture<ResultSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
