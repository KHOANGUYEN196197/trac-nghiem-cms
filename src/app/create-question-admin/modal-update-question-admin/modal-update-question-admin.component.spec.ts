import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateQuestionAdminComponent } from './modal-update-question-admin.component';

describe('ModalUpdateQuestionAdminComponent', () => {
  let component: ModalUpdateQuestionAdminComponent;
  let fixture: ComponentFixture<ModalUpdateQuestionAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalUpdateQuestionAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUpdateQuestionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
