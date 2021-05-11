import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateQuestionAdminComponent } from './modal-create-question-admin.component';

describe('ModalCreateQuestionAdminComponent', () => {
  let component: ModalCreateQuestionAdminComponent;
  let fixture: ComponentFixture<ModalCreateQuestionAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreateQuestionAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateQuestionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
