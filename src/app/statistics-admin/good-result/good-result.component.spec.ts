import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodResultComponent } from './good-result.component';

describe('GoodResultComponent', () => {
  let component: GoodResultComponent;
  let fixture: ComponentFixture<GoodResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
