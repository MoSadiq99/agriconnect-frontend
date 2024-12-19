import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCultivationDialogComponent } from './add-cultivation-dialog.component';

describe('AddCultivationDialogComponent', () => {
  let component: AddCultivationDialogComponent;
  let fixture: ComponentFixture<AddCultivationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCultivationDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCultivationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
