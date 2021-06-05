import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumSubjectComponent } from './medium-subject.component';

describe('MediumSubjectComponent', () => {
  let component: MediumSubjectComponent;
  let fixture: ComponentFixture<MediumSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediumSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
