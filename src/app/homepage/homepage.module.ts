// homepage.module.ts

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';  // Import the LoginComponent

const routes: Routes = [
  // Define your routes here
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],  // Make sure LoginComponent is declared here
})
export class HomepageModule { }
