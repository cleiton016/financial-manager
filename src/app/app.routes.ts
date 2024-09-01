import { Routes } from '@angular/router';
import { HomeComponent } from './pages/not-logged-in/home/home.component';
import { NavigationComponent } from '@pages/navigation/navigation.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'customer-area', component: NavigationComponent},
    {path: '**', redirectTo: ''}
];
