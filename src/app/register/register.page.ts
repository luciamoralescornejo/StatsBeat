import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule]
})
export class RegisterPage {

  // Datos del formulario
  formulario = {
    nombre: '',
    correo: '',
    contrasena: '',
    confirmarContrasena: '',
    rol: 'oyente' //por defecto será artista
  };

  constructor() { }

  // Cambiar rol: solo uno puede estar activo
  toggleRol(rol: 'artista' | 'oyente') {
    this.formulario.rol = rol;
  }

  // Registrar datos
  registrar() {
    console.log('Datos del formulario:', {
      nombre: this.formulario.nombre,
      correo: this.formulario.correo,
      contrasena: this.formulario.contrasena,
      rol: this.formulario.rol
    });

    if (this.formulario.contrasena !== this.formulario.confirmarContrasena) {
      console.log("Las contraseñas no coinciden");
      return;
    }

    // Aquí van a ir los datos al backend
  }
}