import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent {

  mensaje='';
  enviado: Boolean=false;

  EnviarMensaje(){
    alert('Mensaje: ' + this.mensaje);
    this.enviado=true
  }

  //metodo de este componente se llama igual al de candeactivate guard
  SalirDeRuta(): Observable<boolean> | boolean{
    // Crietrio para evitar que el usuario abandone el cpomponente
    
    // Si no hay mensaje (o esta vacio) o enviado es true entonces SÍ puede salir
    if(!this.mensaje || this.enviado ){
      console.log('puede abandonar la página')
      return true;
    }

    //de lo contrario    
    const confirmar = confirm("¿Desea abandonar el formulario? \n Perderá todos los datos!!");
    return confirmar;
    }
}
