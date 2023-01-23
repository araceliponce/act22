import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  // mensaje = '';
  enviado:boolean=false;

  //para el formulario
    constructor(private formBuilder: FormBuilder) { }
  
  registroForm = this.formBuilder.group({
      firstname:['', Validators.required],
      lastname:['', Validators.required],
      username:['', Validators.required],
      password:['', Validators.required]
  })
  
  get firstname(){return this.registroForm.get('firstname')}
  get lastname(){return this.registroForm.get('lastname')}
  get username(){return this.registroForm.get('username')}
  get password(){return this.registroForm.get('password')}
  
  
  datos = new Array();
    Enviar(){ 
    this.datos.push({
    'FirstName' : this.registroForm.get('firstname')?.value,
    'LastName' : this.registroForm.get('lastname')?.value,
    'Username' : this.registroForm.get('username')?.value,
    'Password' : this.registroForm.get('password')?.value,
    })
    this.enviado=true;
  }
   
  //fin

  //metodo de este componente se llama igual al de candeactivate guard
  SalirDeRuta(): Observable<boolean> | boolean{  
    //this.registroForm.valid ||   
    // Si el form de registro fue enviado es true entonces SÍ puede salir
    if(this.enviado){ //aqui falta agregar alguna condicion que revise si el form tiene algun dato escrito
    return true;
    }

    //de lo contrario    
    const confirmar = confirm("¿Desea abandonar el formulario? \n Perdera todos los datos!!");
    return confirmar;
    }

}
