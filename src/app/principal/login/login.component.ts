import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //comment
  actionName = 'hidden';
  //comment

  //consumir el servicio
  //crear una instancia de autenticacion.service.ts y una de instancia de Router

  constructor(private autenticacion:AutenticacionService, private router: Router){}

  urlRedireccion = ''; //ruta a la que va a ir, puede ser a la que intenta acceder o no, dependiendo de si tiene autorizacion

  //metodo del btn
  login(){
    this.autenticacion.login();

    this.urlRedireccion=this.autenticacion.urlUsuarioIntentaAcceder; //capturamos el string

    this.autenticacion.urlUsuarioIntentaAcceder=''; //una vez que urlRedireccion ya guardó el string, lo limpiamos

    this.router.navigate([this.urlRedireccion]); //y navegamos a esa ruta, procedemos a IR A CANACTIVATE


  }
}
