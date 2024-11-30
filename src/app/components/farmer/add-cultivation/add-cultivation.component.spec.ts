import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCultivationComponent } from './add-cultivation.component';

describe('AddCultivationComponent', () => {
  let component: AddCultivationComponent;
  let fixture: ComponentFixture<AddCultivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCultivationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCultivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
