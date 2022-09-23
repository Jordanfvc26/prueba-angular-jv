import { Pipe, PipeTransform } from '@angular/core';
import { ListaPaises } from './../interfaces/lista-paises.interface';

@Pipe({
  name: 'buscarPaises'
})
export class BuscarPaisesPipe implements PipeTransform {

  /*Método que nos permite buscar un país por su nombre. Se compara el nombre del objeto 
  con el que se ingresa por texto*/
  transform(value: any, arg: any): any {
    const resultado = [];
    for(const pais of value){
      if(pais.name.search(arg) > -1){
        resultado.push(pais);
      }
    }
    return resultado;
  }
}
