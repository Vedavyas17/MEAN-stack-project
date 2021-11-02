import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vboard1Component } from './vboard1.component';

describe('Vboard1Component', () => {
  let component: Vboard1Component;
  let fixture: ComponentFixture<Vboard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vboard1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vboard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
