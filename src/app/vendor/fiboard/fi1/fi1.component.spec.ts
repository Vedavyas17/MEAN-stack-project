import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fi1Component } from './fi1.component';

describe('Fi1Component', () => {
  let component: Fi1Component;
  let fixture: ComponentFixture<Fi1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fi1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fi1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
