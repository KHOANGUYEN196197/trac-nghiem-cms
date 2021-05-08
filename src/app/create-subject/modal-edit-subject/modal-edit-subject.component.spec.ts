import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditSubjectComponent } from './modal-edit-subject.component';

describe('ModalEditSubjectComponent', () => {
  let component: ModalEditSubjectComponent;
  let fixture: ComponentFixture<ModalEditSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
