import { Component } from '@angular/core';
import { CertificationService } from '../../services/certification.service';

@Component({
  selector: 'app-certification',
  standalone: true,
  imports: [],
  templateUrl: './certification.component.html',
  styleUrl: './certification.component.css'
})
export class CertificationComponent {

  certifications: any[] = [];
  farmerId: number = 1;

  constructor(private certificationService: CertificationService) { }

  ngOnInit(): void {
    this.loadCertifications();
  }

  // Fetch certifications
  loadCertifications() {
    this.certificationService.getCertifications(this.farmerId).subscribe({
      next: (data) => {
        this.certifications = data;
        console.log('Certifications:', this.certifications);
      },
      error: (error) => {
        console.error('Error fetching certifications:', error);
      }
    });
  }
  // loadCertifications() {
  //   this.certificationService.getCertifications(this.farmerId).subscribe(
  //     (data) => {
  //       this.certifications = data;
  //       console.log('Certifications:', this.certifications);
  //     },
  //     (error) => {
  //       console.error('Error fetching certifications:', error);
  //     }
  //   );
  // }

  // Add a certification
  addCertification() {
    const certificationType = 'Organic'; // Example
    const remarks = 'Certified for sustainable farming practices.';
    this.certificationService.addCertification(this.farmerId, certificationType, remarks).subscribe({
      next: (response) => {
        console.log('Certification added:', response);
        this.loadCertifications(); // Reload after adding
      },
      error: (error) => {
        console.error('Error adding certification:', error);
      }
    });
  }
}
