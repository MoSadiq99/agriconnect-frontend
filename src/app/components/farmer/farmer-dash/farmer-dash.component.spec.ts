import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerDashComponent } from './farmer-dash.component';

describe('FarmerDashComponent', () => {
  let component: FarmerDashComponent;
  let fixture: ComponentFixture<FarmerDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmerDashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmerDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
