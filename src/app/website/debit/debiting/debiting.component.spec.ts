import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitingComponent } from './debiting.component';

describe('DebitingComponent', () => {
  let component: DebitingComponent;
  let fixture: ComponentFixture<DebitingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebitingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
