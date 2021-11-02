import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emp5Component } from './emp5.component';

describe('Emp5Component', () => {
  let component: Emp5Component;
  let fixture: ComponentFixture<Emp5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Emp5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Emp5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
