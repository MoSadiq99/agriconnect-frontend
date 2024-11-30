import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define an interface for login credentials
export interface LoginCredentials {
  email: string;
  password: string;
}

// Define an interface for login response
export interface LoginResponse {
  token: string;
  userId: number;
  email: string;
  // Add any other fields from your backend response
}

@Injectable({
  providedIn: 'root', // This makes the service globally available
})

export class AuthService {
  // Base URL for your Spring Boot backend
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) { }

  // Login method
  login(credentials: LoginCredentials): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials);
  }

  // Logout method
  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {});
  }

  // Method to check if user is authenticated
  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }

  // Method to get the current user's token
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
}

// export class AuthService {
//   private baseUrl = 'http://localhost:8080/api/auth'; // Backend API URL

//   constructor(private http: HttpClient) {}

//   login(credentials: { email: string; password: string }): Observable<any> {
//     return this.http.post(`${this.baseUrl}/login`, credentials);
//   }

//   getToken(): string | null {
//     return localStorage.getItem('authToken');
//   }

//   isLoggedIn(): boolean {
//     return !!this.getToken();
//   }

//   logout(): void {
//     localStorage.removeItem('authToken');
//   }

//   register(user: any): Observable<any> {
//     return this.http.post(`${this.baseUrl}/register`, user);
//   }
// }


