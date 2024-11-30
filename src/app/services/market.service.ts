import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  constructor() { }

  addCultivation(cultivation: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/farmer/cultivation`, cultivation);
  }

  addCultivation(cultivation: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/farmer/cultivation`, cultivation);
  }
}
