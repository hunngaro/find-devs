import { Routes } from "@angular/router";
import { FindLayoutComponent } from "./find-layout.component";
import { HomeComponent } from "src/app/pages/home/home.component";
import { ProfileComponent } from "src/app/pages/profile/profile.component";
import { ErrorComponent } from "src/app/pages/error/error.component";

export const FindLayoutRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'profile/:username', component: ProfileComponent },
    { path: 'error/:code-error', component: ErrorComponent }
];