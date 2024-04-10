import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public email: string = '';
  public contrasenia: string = '';
  public tipoInput: string = 'password';
  public validarCorreo: boolean = false;
  public validarContrasenia: boolean = false;
  public exitoso: boolean = false;

  public mostrarContrasenia(event: any){
    if (event.target.checked) {
      this.tipoInput = 'text';
      return this.tipoInput;
    } else  {
      this.tipoInput = 'password';
      return this.tipoInput;      
    } 
  }

  public validarDatos(){debugger
    if (!this.email) {
      this.validarCorreo = true;
    } else {
      this.validarCorreo = false;
    }
    if (this.contrasenia.length <= 5){
      this.validarContrasenia = true;
    } else {
      this.validarContrasenia = false;
    }

    if (!this.validarCorreo && !this.validarContrasenia) {
      alert('Ingreso exitoso');
    }
  }

}
