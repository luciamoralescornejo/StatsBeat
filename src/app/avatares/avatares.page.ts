import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-avatares',
  standalone: true,
  templateUrl: './avatares.page.html',
  styleUrls: ['./avatares.page.scss'],
  imports: [IonContent, CommonModule, FormsModule],
})
export class AvataresPage implements OnInit {

  // Lista de imágenes dentro de /assets/img/avatars
  avatars: string[] = [
    'assets/img/avatars/Balón.png',
    'assets/img/avatars/Bote.png',
    'assets/img/avatars/Corazón.png',
    'assets/img/avatars/Fantasma.png',
    'assets/img/avatars/Gato.png',
    'assets/img/avatars/Girasol.png',
    'assets/img/avatars/Osito.png',
    'assets/img/avatars/Persona.png',
    'assets/img/avatars/STOP.png',
  ];

  // Índice inicial del avatar
  avatarIndex = 0;

  constructor() { }

  ngOnInit() { }

  // Cambiar al avatar anterior
  anteriorAvatar() {
    this.avatarIndex =
      (this.avatarIndex - 1 + this.avatars.length) % this.avatars.length;
  }

  // Cambiar al avatar siguiente
  siguienteAvatar() {
    this.avatarIndex =
      (this.avatarIndex + 1) % this.avatars.length;
  }

  // Seleccionar avatar final
  avatar() {
    const seleccionado = this.avatars[this.avatarIndex];
    console.log('Avatar seleccionado:', seleccionado);

    // Aquí puedes guardar en Firebase, pasar a siguiente pantalla, etc.
  }
}