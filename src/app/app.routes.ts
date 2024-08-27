import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { Page404Component } from './page404/page404.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const routes: Routes = [
    {path: "dashboard", component: DashboardComponent},
    {path: "connexion", component: AccueilComponent},
    {path: "", redirectTo: "accueil", pathMatch: 'full' },
    {path: "**", component: Page404Component}
];
