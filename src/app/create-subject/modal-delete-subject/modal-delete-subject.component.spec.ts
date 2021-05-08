import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteSubjectComponent } from './modal-delete-subject.component';

describe('ModalDeleteSubjectComponent', () => {
  let component: ModalDeleteSubjectComponent;
  let fixture: ComponentFixture<ModalDeleteSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
