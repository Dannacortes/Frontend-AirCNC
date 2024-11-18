import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: any = null;  // Variable para almacenar el usuario actual

  constructor() {}

  // // Simulando el login para este ejemplo
  // login(email: string, password: string) {
  //   return new Promise((resolve, reject) => {
  //     if (username === 'admin' && password === 'admin') {
  //       this.currentUser = { username }; // Guardamos el usuario autenticado
  //       resolve({ username });
  //     } else {
  //       reject('Credenciales incorrectas');
  //     }
  //   });
  // }

  // Método para obtener el usuario actual
  getCurrentUser() {
    return this.currentUser;  // Retorna el usuario actual
  }

  // Método para cerrar sesión
  logout() {
    this.currentUser = null;  // Limpiamos la información del usuario
  }
}
