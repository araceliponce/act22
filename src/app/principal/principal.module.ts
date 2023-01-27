import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    MenuComponent,
    LoginComponent,
    MensajeComponent,
    SignupComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    MenuComponent
  ]
})
export class PrincipalModule { }
