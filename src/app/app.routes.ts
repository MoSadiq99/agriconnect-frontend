import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { BlankLayoutComponent } from './components/layouts/blank-layout/blank-layout.component';
import { MainLayoutComponent } from './components/layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: BlankLayoutComponent, // No header/footer on the login page
    children: [
      {
        path: '',
        component: LoginComponent, // Login page
      },
    ],
  },
  {
    path: 'home',
    component: MainLayoutComponent, // Header/footer present
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.component').then((c) => c.HomeComponent),
      },
    ],
  },
  {
    path: 'dashboard',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/farmer/farmer-dash/farmer-dash.component').then(
            (c) => c.FarmerDashComponent
          ),
      },
    ],
  },
  {
    path: 'market',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/marketplace/marketplace.component').then(
            (c) => c.MarketplaceComponent
          ),
      },
    ],
  },
];
