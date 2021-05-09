import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateCategoryAdminComponent } from './modal-create-category-admin.component';

describe('ModalCreateCategoryAdminComponent', () => {
  let component: ModalCreateCategoryAdminComponent;
  let fixture: ComponentFixture<ModalCreateCategoryAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreateCategoryAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateCategoryAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
