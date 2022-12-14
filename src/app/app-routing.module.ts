import { FavoriteCountriesComponent } from './favorite-countries/favorite-countries.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", pathMatch:"full", redirectTo:"login"},
  {path: "login", component:LoginComponent},
  {path: "all-countries", component:AllCountriesComponent},
  {path: "favorite-countries", component:FavoriteCountriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
