import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuestionAdminComponent } from './create-question-admin.component';

describe('CreateQuestionAdminComponent', () => {
  let component: CreateQuestionAdminComponent;
  let fixture: ComponentFixture<CreateQuestionAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateQuestionAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuestionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
