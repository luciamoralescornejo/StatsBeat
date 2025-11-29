import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InicioPage implements OnInit {

  formulario = {
    nombre: '',
    correo: '',
    contrasena: '',
    confirmarContrasena: '',
    rol: 'oyente' //por defecto será artista
  };

  constructor() { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // Registrar datos
  iniciarSesion() {
    console.log('Datos del formulario:', {
      nombre: this.formulario.nombre,
      correo: this.formulario.correo,
      contrasena: this.formulario.contrasena,
    });

    // Aquí van a ir los datos al backend
  }

}
