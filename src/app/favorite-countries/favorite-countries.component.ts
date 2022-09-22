import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-favorite-countries',
  templateUrl: './favorite-countries.component.html',
  styleUrls: ['./favorite-countries.component.css']
})
export class FavoriteCountriesComponent implements OnInit {

  constructor(private ruta: Router) { }

  ngOnInit(): void {
    this.estaLogueado();
  }

  estaLogueado(){
    if(!localStorage.getItem("usuario")){
      this.ruta.navigateByUrl('/login');
    }
  }

    //Removiendo el localStorage y redirigiendo al login
    cerrarSesion(){
      localStorage.removeItem("usuario");
      this.ruta.navigateByUrl('/login');
    }

}
