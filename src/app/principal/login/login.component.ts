import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  nombreAutorizado = 'test';
  passAutorizado = 'test';

  nombre:string = '';
  pass:string = '';
  //consumir el servicio
  //crear una instancia de autenticacion.service.ts y una de instancia de Router

  constructor(private autenticacion:AutenticacionService, private router: Router){}

  urlRedireccion = ''; //ruta a la que va a ir, puede ser a la que intenta acceder o no, dependiendo de si tiene autorizacion

  //+++
  formWasSent=false;

  //metodo del btn
  login(){
    console.log(this.nombre+this.pass)
    if(this.nombre==this.nombreAutorizado && this.pass==this.passAutorizado){
      this.autenticacion.login();

      this.urlRedireccion=this.autenticacion.urlUsuarioIntentaAcceder; //capturamos el string
  
      this.autenticacion.urlUsuarioIntentaAcceder=''; //una vez que urlRedireccion ya guardó el string, lo limpiamos
  
      this.router.navigate([this.urlRedireccion]); //y navegamos a esa ruta, procedemos a IR A CANACTIVATE
  
      this.formWasSent = true;
      alert('welcome, '+this.nombre+'. Ahora puedes navegar por el resto de páginas');

    } else{
      alert('los datos de inicio de sesión son incorrectos')
      this.formWasSent = false;

    }
   
  }



  //---y agregamos el candeactivate a login en routes
/*   SalirDeRuta(): Observable<boolean> | boolean{  
    //this.registroForm.valid ||   
    // Si el form de registro fue enviado es true entonces SÍ puede salir
    if(this.formWasSent==true){ 
    return true;
    }

    //de lo contrario    
    const confirmar = confirm("Primero ingresa o registrate, por favor");
    return confirmar;
    } */

}
