import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTitleComponent } from './list-title.component';

describe('TodoTitleComponent', () => {
  let component: ListTitleComponent;
  let fixture: ComponentFixture<ListTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
