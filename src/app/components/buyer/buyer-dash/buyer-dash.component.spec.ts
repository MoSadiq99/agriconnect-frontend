import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerDashComponent } from './buyer-dash.component';

describe('BuyerDashComponent', () => {
  let component: BuyerDashComponent;
  let fixture: ComponentFixture<BuyerDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyerDashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
