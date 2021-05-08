import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategoryAdminComponent } from './create-category-admin.component';

describe('CreateCategoryAdminComponent', () => {
  let component: CreateCategoryAdminComponent;
  let fixture: ComponentFixture<CreateCategoryAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCategoryAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCategoryAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
