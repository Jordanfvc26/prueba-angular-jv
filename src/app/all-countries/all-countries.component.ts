import { ListaPaises } from './../interfaces/lista-paises.interface';
import { ConsumirApiService } from './../servicios/consumir-api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnInit {

  paises:ListaPaises[] = [];
  estado:boolean = false;

  constructor(private ruta: Router, private api: ConsumirApiService) { }

  ngOnInit(): void {
    this.estaLogueado();
    this.api.obtenerListaPaises().subscribe(data =>{
      this.paises = data;
      this.estado = true;
    })
  }


  //Si no está logueado, no hay nada en el localStorage, y no puede acceder a las otras páginas desde la URL
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

  paisesFavoritos(){
    this.ruta.navigateByUrl('/favorite-countries');
  }
}
