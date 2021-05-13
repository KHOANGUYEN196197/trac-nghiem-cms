import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeenAnswerComponent } from './seen-answer.component';

describe('SeenAnswerComponent', () => {
  let component: SeenAnswerComponent;
  let fixture: ComponentFixture<SeenAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeenAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeenAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
