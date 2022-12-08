import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'masterlist',
    loadChildren: () => import('./masterlist/masterlist.module').then( m => m.MasterlistPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./verification/verification.module').then( m => m.VerificationPageModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./reports/reports.module').then( m => m.ReportsPageModule)
  },
  {
    path: 'adminsignin',
    loadChildren: () => import('./adminsignin/adminsignin.module').then( m => m.AdminsigninPageModule)
  },
  {
    path: 'admindashboard',
    loadChildren: () => import('./admindashboard/admindashboard.module').then( m => m.AdmindashboardPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'profile2',
    loadChildren: () => import('./profile2/profile2.module').then( m => m.Profile2PageModule)
  },
  {
    path: 'profile3',
    loadChildren: () => import('./profile3/profile3.module').then( m => m.Profile3PageModule)
  },
  {
    path: 'profile4',
    loadChildren: () => import('./profile4/profile4.module').then( m => m.Profile4PageModule)
  },
  {
    path: 'profile5',
    loadChildren: () => import('./profile5/profile5.module').then( m => m.Profile5PageModule)
  },
  {
    path: 'profile6',
    loadChildren: () => import('./profile6/profile6.module').then( m => m.Profile6PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
