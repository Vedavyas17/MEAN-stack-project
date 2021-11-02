import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VdetailsComponent } from './vdetails.component';

describe('VdetailsComponent', () => {
  let component: VdetailsComponent;
  let fixture: ComponentFixture<VdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
