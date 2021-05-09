import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateCategoryAdminComponent } from './modal-update-category-admin.component';

describe('ModalUpdateCategoryAdminComponent', () => {
  let component: ModalUpdateCategoryAdminComponent;
  let fixture: ComponentFixture<ModalUpdateCategoryAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalUpdateCategoryAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUpdateCategoryAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
