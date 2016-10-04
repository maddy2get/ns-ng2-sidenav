import { Component } from "@angular/core";
import { Routes } from '@angular/router';
import { SecondComponent } from "./second.component";

@Component({
  selector: "tk-app",
  template: "<page-router-outlet></page-router-outlet>"
})
export class FirstComponent {

}

export const APP_ROUTES: Routes = [
    { path: "", redirectTo: "root", pathMatch: 'full' }, 
    { path: "root", component: SecondComponent, pathMatch: 'full' }
    ];