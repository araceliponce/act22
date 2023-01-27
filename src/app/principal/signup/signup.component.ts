import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

interface Persona{
  firstname: string,
 username: string,
 email: string,
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  // mensaje = '';
  enviado:boolean=false;

  //para el formulario
  
 
//usuario es una Persona
 usuario:Persona={
  firstname: '',
  username: '',
  email: ''
 }

Enviar(){
  console.log(this.usuario);
}

Cancelar(){
  this.usuario={
    firstname: '',
    username: '',
    email: ''
  }
  console.log(this.usuario);
}
   
  //fin

  //metodo de este componente se llama igual al de candeactivate guard
  SalirDeRuta(): Observable<boolean> | boolean{  
    // Si el form de registro fue enviado o los campos estan vacios, entonces SÍ puede salir
    const isEmpty = !Object.values(this.usuario).join(''); //retorna true si el objeto esta vacío y false si el objeto tiene algun contenido
    console.log(this.usuario,this.enviado,isEmpty);

    if(isEmpty || this.enviado){ 
    return true;
    } else{
    //de lo contrario    
    const confirmar = confirm("¿Desea abandonar el formulario? \n Perdera los datos que no haya enviado!!");
    return confirmar;
    }
    }   

}
