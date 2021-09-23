import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDayComponent } from './btn-day.component';

describe('BtnDayComponent', () => {
  let component: BtnDayComponent;
  let fixture: ComponentFixture<BtnDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
