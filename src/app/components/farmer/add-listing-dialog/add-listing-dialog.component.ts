import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef} from '@angular/material/dialog';



@Component({
  selector: 'app-add-listing-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './add-listing-dialog.component.html',
  styleUrl: './add-listing-dialog.component.css'
})
export class AddListingDialogComponent {

  listing = {
    cultivationId: null,
    quantity: null,
    location: '',
    availableFrom: ''
  };

  cultivations = [
    { id: 1, cropType: 'Wheat', expectedYield: 100 },
    { id: 2, cropType: 'Rice', expectedYield: 200 },
  ];

  constructor(public dialogRef: MatDialogRef<AddListingDialogComponent>) { }

  close(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    console.log('Form Submitted', this.listing);
    this.dialogRef.close();
    // Here, you would usually call the service to save the data, e.g., `this.marketService.addCultivation(this.listing)`
  }


}


