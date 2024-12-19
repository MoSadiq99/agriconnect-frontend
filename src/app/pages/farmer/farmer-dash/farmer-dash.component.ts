import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddListingDialogComponent } from '../../../components/farmer/add-listing-dialog/add-listing-dialog.component';
import { PrimaryButtonComponent } from "../../../components/primary/primary-button/primary-button.component";

@Component({
  selector: 'app-farmer-dash',
  standalone: true,
  imports: [PrimaryButtonComponent],
  templateUrl: './farmer-dash.component.html',
  styleUrl: './farmer-dash.component.css'
})

export class FarmerDashComponent {

  constructor(private dialog: MatDialog) {}

  private dialogOpen = false;

  openAddListingDialog(): void {

    // Check if dialog is already open
    if (!this.dialogOpen) {
      const dialogRef = this.dialog.open(AddListingDialogComponent, {
        // Center the dialog
        position: {
          top: '-10%',
          left: '40%'
        },
        width: '400px', // Optional: set a specific width
        height: 'auto',
        // Prevent closing on click outside
        disableClose: true
      });

      // Set flag to track dialog state
      this.dialogOpen = true;

      // Remove the flag when dialog closes
      dialogRef.afterClosed().subscribe(() => {
        this.dialogOpen = false;
      });
    }
  }
}


