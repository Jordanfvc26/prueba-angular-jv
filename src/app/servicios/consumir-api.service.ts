import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ListaPaises} from './../interfaces/lista-paises.interface'


@Injectable({
  providedIn: 'root'
})
export class ConsumirApiService {

  url:string = "https://restcountries.com/v2/all"

  constructor(private http:HttpClient) { }


  obtenerListaPaises():Observable<ListaPaises[]>{
    let ruta = this.url;
    return this.http.get<ListaPaises[]>(ruta);
  }
}
