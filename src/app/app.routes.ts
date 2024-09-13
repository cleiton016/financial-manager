import { Routes } from '@angular/router';
import { HomeComponent } from './pages/not-logged-in/home/home.component';
import { NavigationComponent } from '@pages/navigation/navigation.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { 
        path: 'customer-area',
        component: NavigationComponent,
        loadChildren: () => import('./pages/customer-area/customer-area.module').then(m => m.CustomerAreaModule) 
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
