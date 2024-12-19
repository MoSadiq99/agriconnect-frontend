import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }  // Inject HttpClient

  // Method to add a cultivation
  addListing(listing: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/farmer/cultivation`, listing);
  }
}
