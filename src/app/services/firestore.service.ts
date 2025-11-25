import { Injectable } from '@angular/core';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  db = getFirestore();

  constructor() {}

  // Crear / guardar datos del usuario
  createUserData(uid: string, data: any) {
    const userRef = doc(this.db, 'users', uid);
    return setDoc(userRef, data);
  }

  // Obtener datos del usuario
  getUserData(uid: string) {
    const userRef = doc(this.db, 'users', uid);
    return getDoc(userRef);
  }
}