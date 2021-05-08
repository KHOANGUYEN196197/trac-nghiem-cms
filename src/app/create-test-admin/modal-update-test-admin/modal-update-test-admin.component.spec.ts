import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateTestAdminComponent } from './modal-update-test-admin.component';

describe('ModalUpdateTestAdminComponent', () => {
  let component: ModalUpdateTestAdminComponent;
  let fixture: ComponentFixture<ModalUpdateTestAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalUpdateTestAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUpdateTestAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
