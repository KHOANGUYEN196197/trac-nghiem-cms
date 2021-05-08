import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateTestAdminComponent } from './modal-create-test-admin.component';

describe('ModalCreateTestAdminComponent', () => {
  let component: ModalCreateTestAdminComponent;
  let fixture: ComponentFixture<ModalCreateTestAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreateTestAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateTestAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
