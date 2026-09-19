import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario-contrasena',
  standalone: false,
  styleUrl: './usuario-contrasena.css',
  templateUrl: './usuario-contrasena.html',
})
export class UsuarioContrasena {

  usuario: string = '';
  contrasena: string = '';
  mensaje: string = '';

  usuarioCorrecto: string = 'admin';
  contrasenaCorrecta: string = '12345';

  validar(): void {

    if (this.usuario != this.usuarioCorrecto) {
      this.mensaje = 'El nombre de usuario no es válido.';
    }
    else if (this.contrasena != this.contrasenaCorrecta) {
      this.mensaje = 'La contraseña no es válida.';
    }
    else {
      this.mensaje = 'Bienvenido al sistema, ' + this.usuario;
    }

  }
}