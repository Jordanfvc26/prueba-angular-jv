import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { FavoriteCountriesComponent } from './favorite-countries/favorite-countries.component';


import { ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { BuscarPaisesPipe } from './pipes/buscar-paises.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AllCountriesComponent,
    FavoriteCountriesComponent,
    BuscarPaisesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'El campo es requerido.',
          minlength: ({ requiredLength, actualLength }) => 
                      `Se requiere mínimo ${requiredLength} caracteres.`
        }
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
