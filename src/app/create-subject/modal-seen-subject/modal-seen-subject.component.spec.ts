import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSeenSubjectComponent } from './modal-seen-subject.component';

describe('ModalSeenSubjectComponent', () => {
  let component: ModalSeenSubjectComponent;
  let fixture: ComponentFixture<ModalSeenSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSeenSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSeenSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
