import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { BlankComponent } from './pages/blank/blank.component';
import { AnotherPageComponent } from './pages/another-page/another-page.component';

export const routes: Routes = [
    {path: "", component:LandingPageComponent},
    {path: "blank", component:BlankComponent},
    {path: "another-page", component:AnotherPageComponent},
];
