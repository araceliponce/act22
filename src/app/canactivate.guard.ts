import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from './services/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class CanactivateGuard implements CanActivate {


  //LO DEL LOGIN lo necesitamos aqui tmb
  constructor(private autenticacion: AutenticacionService, private router: Router){}
  //fin 

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;

    if(this.autenticacion.isLoggedIn(state.url)){
      return true;
    } //de lo contrario regresa a /login
    this.router.navigate(['/login']);
    return false;

  }
  
}
