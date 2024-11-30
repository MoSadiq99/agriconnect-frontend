import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthService, LoginCredentials } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials: LoginCredentials = { 
    email: '', 
    password: '' 
  };
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private authService: AuthService, 
    private router: Router
  ) { }

  onSubmit() {
    // Reset previous error and set loading state
    this.errorMessage = '';
    this.isLoading = true;

    // Call login method from AuthService
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        // Store token and user info
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('userId', response.userId.toString());
        localStorage.setItem('userEmail', response.email);

        // Navigate to dashboard
        this.router.navigate(['/dashboard']);
        this.isLoading = false;
      },
      error: (error) => {
        // Handle login error
        console.error('Login failed:', error);
        this.errorMessage = error.error?.message || 'Login failed. Please try again.';
        this.isLoading = false;
      }
    });
  }
}

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';

// import { AuthService } from '../../services/auth.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [
//     CommonModule, 
//     FormsModule,  // Required for ngModel two-way binding
//     RouterModule  // Required for routing functionality
//   ],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {
//   credentials = { email: '', password: '' };
//   errorMessage: string = ''; // Add error message property

//   constructor(
//     private authService: AuthService, 
//     private router: Router
//   ) { }

//   onSubmit() {
//     // Basic validation
//     if (!this.credentials.email || !this.credentials.password) {
//       this.errorMessage = 'Please enter both email and password';
//       return;
//     }

//     this.authService.login(this.credentials).subscribe({
//       next: (response) => {
//         // Clear any previous error messages
//         this.errorMessage = '';
        
//         // Store the authentication token
//         localStorage.setItem('authToken', response.token);
        
//         // Navigate to dashboard
//         this.router.navigate(['/dashboard']);
//       },
//       error: (error) => {
//         // Handle login error
//         console.error('Login failed:', error);
//         this.errorMessage = 'Login failed. Please check your credentials.';
//       }
//     });
//   }
// }
