import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  private baseUrl = 'http://localhost:8080/api/certifications'; // Base URL for certification endpoints

  constructor(private http: HttpClient) {}

  // Add certification for a farmer
  addCertification(farmerId: number, certificationType: string, remarks: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/certify/${farmerId}?certificationType=${certificationType}&remarks=${remarks}`, {});
  }

  // Get certifications for a farmer
  getCertifications(farmerId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${farmerId}`);
  }
}
