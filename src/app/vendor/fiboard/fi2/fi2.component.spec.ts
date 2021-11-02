import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fi2Component } from './fi2.component';

describe('Fi2Component', () => {
  let component: Fi2Component;
  let fixture: ComponentFixture<Fi2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fi2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fi2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
