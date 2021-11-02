import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fi3Component } from './fi3.component';

describe('Fi3Component', () => {
  let component: Fi3Component;
  let fixture: ComponentFixture<Fi3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fi3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fi3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
