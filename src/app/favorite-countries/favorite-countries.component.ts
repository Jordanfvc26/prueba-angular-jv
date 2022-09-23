import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ListaPaises } from './../interfaces/lista-paises.interface';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-favorite-countries',
  templateUrl: './favorite-countries.component.html',
  styleUrls: ['./favorite-countries.component.css']
})
export class FavoriteCountriesComponent implements OnInit {

  //Array que almacenará los países favoritos del usuario.
  listaPaisesFavoritos:ListaPaises[] = [];

  constructor(private ruta: Router) { 
  }

  ngOnInit(): void {
    this.estaLogueado();
    this.obtenerPaisesFavoritos();
  }

  //Verificamos si ha iniciado sesión, sino, lo redirigimos al login.
  estaLogueado() {
    if (!localStorage.getItem("usuario")) {
      this.ruta.navigateByUrl('/login');
    }
  }

  //Removiendo el localStorage para cerrar sesión y redirigiendo al login.
  cerrarSesion() {
    localStorage.removeItem("usuario");
    this.ruta.navigateByUrl('/login');
  }


  //Obtenemos los países favoritos para mostrarlos en la tabla.
  obtenerPaisesFavoritos(){
    var temp = localStorage.getItem("paises");
    if(temp==null){
      this.listaPaisesFavoritos = [];
    }
    else{
      this.listaPaisesFavoritos = JSON.parse(temp);
    }
    return this.listaPaisesFavoritos;
  }

  //Para eliminar el país favorito que se seleccione.
  eliminarPaisFavorito(paisObj:any){
    let paisEliminado = localStorage.removeItem("paises")
    this.listaPaisesFavoritos.shift();
    this.alertaEliminarFavorito("Se eliminó de tus favoritos.");
  }


  //Alerta al eliminar un país de favoritos
  alertaEliminarFavorito(mensaje: string) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: mensaje,
      showConfirmButton: false,
      timer: 1000
    })
  }
}
