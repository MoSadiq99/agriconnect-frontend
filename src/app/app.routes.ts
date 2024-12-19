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
          import('./pages/farmer/farmer-dash/farmer-dash.component').then(
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
  {
    path: 'admin-dash',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/admin/admin-dash/admin-dash.component').then(
            (c) => c.AdminDashComponent
          ),
      },
    ],
  },
  {
    path: 'buyer-dash',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/buyer/buyer-dash/buyer-dash.component').then(
            (c) => c.BuyerDashComponent
          ),
      },
    ],
  },
  {
    path: 'requirements',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/buyer/requirements/requirements.component').then(
            (c) => c.RequirementsComponent
          ),
      },
    ],
  },
  {
    path: 'add-listing',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/farmer/add-listing/add-crop.component').then(
            (c) => c.AddCropComponent
          ),
      },
    ],
  },
];
