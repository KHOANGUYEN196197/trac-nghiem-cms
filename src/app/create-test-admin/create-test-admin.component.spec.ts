import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTestAdminComponent } from './create-test-admin.component';

describe('CreateTestAdminComponent', () => {
  let component: CreateTestAdminComponent;
  let fixture: ComponentFixture<CreateTestAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTestAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTestAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
