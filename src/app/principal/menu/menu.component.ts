import { Component } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  //añadimos
constructor(private autenticacion:AutenticacionService){}

userLogin=false;

ngOnInit(){
  this.userLogin = this.autenticacion.isLoggedIn('');
  //uno se suscribe a un servicio para poder ejecutar metodos, por ejm aqui queremos usar el changeloginstatus
  this.autenticacion.changeLoginStatus$.subscribe((estado:boolean)=>{
    this.userLogin=estado; //nuestra variable userLogin va a capturar el valor obtenido del metodo de changeloginstatus
  })
}

//metodo para el link logout
logout(){
  this.autenticacion.logout();
}

}
