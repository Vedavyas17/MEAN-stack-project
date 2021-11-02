import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emp4Component } from './emp4.component';

describe('Emp4Component', () => {
  let component: Emp4Component;
  let fixture: ComponentFixture<Emp4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Emp4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Emp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
