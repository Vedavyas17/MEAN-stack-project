import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditingComponent } from './crediting.component';

describe('CreditingComponent', () => {
  let component: CreditingComponent;
  let fixture: ComponentFixture<CreditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
