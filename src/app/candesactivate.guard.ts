import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

//crear interfaz para evitar crear un servicio y colocar todo eso aqui
// Crear una Interfaz para CanDeactivate
interface Desactivar {
  SalirDeRuta: () => Observable<boolean> | boolean;
  }
  
@Injectable({
providedIn: 'root'
})
  
export class CandesactivateGuard implements CanDeactivate<Desactivar> {

  canDeactivate(component: Desactivar) {
  return component.SalirDeRuta ? component.SalirDeRuta(): true;
  
    //condicional tipo ? :
    //ejecuta? devuelve true or false: devuelve true
  }
  

  
}



