import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CropService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  // Method to add a cultivation
  addCultivation(cultivation: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/farmer/cultivation`, cultivation);
  }
}
