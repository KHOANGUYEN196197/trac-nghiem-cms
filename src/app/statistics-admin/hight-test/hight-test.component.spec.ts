import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HightTestComponent } from './hight-test.component';

describe('HightTestComponent', () => {
  let component: HightTestComponent;
  let fixture: ComponentFixture<HightTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HightTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HightTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
