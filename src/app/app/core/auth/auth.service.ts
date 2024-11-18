import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // Esto asegura que el servicio esté disponible globalmente
})
export class AuthService {
  constructor() {}

  login(username: string, password: string) {
    // Lógica de autenticación, por ejemplo, con Supabase
    return new Promise((resolve, reject) => {
      // Simulación de autenticación
      if (username === 'admin' && password === 'admin') {
        resolve({ username });
      } else {
        reject('Credenciales incorrectas');
      }
    });
  }
}
