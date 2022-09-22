import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private ruta: Router) {
  }


  //Formulario para el login
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(12)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  ngOnInit(): void {
  }


  //Validando al usuario con correo admin
  iniciarSesion(loginForm: any, checkbox: any) {
    if (loginForm.email == "admin@gmail.com" && loginForm.password == "12345678") {
      if (checkbox) {
        //Guardando el localStorage
        let usuario = loginForm.email;
        localStorage.setItem("usuario", usuario);
        this.alertaBienvenida("Iniciaste sesión correctamente.");
        this.ruta.navigateByUrl('/all-countries');
      }
      else{
        this.alertaError("Debe aceptar los términos y condiciones.");
      }
    }
    else {
      this.alertaError("Las credenciales son incorrectas...")
    }
  }

  //Alerta de bienvenida con registro correcto
  alertaBienvenida(mensaje: string) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: mensaje,
      showConfirmButton: false,
      timer: 1500
    })
  }

  //Alerta de error al iniciar sesión o no marcar casilla de terminos y condiciones
  alertaError(mensaje: string) {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: mensaje,
      showConfirmButton: false,
      timer: 1500
    })
  }

}
