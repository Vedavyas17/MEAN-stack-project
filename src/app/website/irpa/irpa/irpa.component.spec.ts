import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrpaComponent } from './irpa.component';

describe('IrpaComponent', () => {
  let component: IrpaComponent;
  let fixture: ComponentFixture<IrpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrpaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IrpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
