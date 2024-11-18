// src/app/profile/profile.component.ts

import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

// Definición de la interfaz User (solo para el frontend)
interface User {
  user_id: string;
  username: string;
  email?: string;
  profilePicture?: string;
  biography?: string;
  phoneNumber?: string;
  verified?: boolean;
  preferences?: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule], // Módulos necesarios para frontend
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: User | null = null;
  isUserActive: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // Solo se carga el perfil simulado en el frontend
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    // Se establece un perfil de usuario simulado en el frontend
    this.currentUser = {
      user_id: '123',
      username: 'john_doe',
      email: 'john.doe@example.com',
      profilePicture: 'https://example.com/profile.jpg',
      biography: 'Hola, soy John!',
      phoneNumber: '123456789',
      verified: true,
      preferences: 'Viajero frecuente',
    };
    this.isUserActive = this.currentUser !== null;
  }

  async openUpdateProfileModal(): Promise<void> {
    const { value: formValues } = await Swal.fire({
      title: 'Actualizar Perfil',
      html: `
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <label for="email">Email:</label>
          <input id="email" class="swal2-input" placeholder="Email" value="${this.currentUser?.email || ''}">

          <label for="username">Nombre de usuario:</label>
          <input id="username" class="swal2-input" placeholder="Nombre de usuario" value="${this.currentUser?.username || ''}">

          <label for="biography">Biografía:</label>
          <textarea id="biography" class="swal2-textarea" placeholder="Biografía">${this.currentUser?.biography || ''}</textarea>

          <label for="phoneNumber">Número de teléfono:</label>
          <input id="phoneNumber" class="swal2-input" placeholder="Número de teléfono" value="${this.currentUser?.phoneNumber || ''}">

          <label for="preferences">Preferencias de viaje:</label>
          <input id="preferences" class="swal2-input" placeholder="Preferencias de viaje" value="${this.currentUser?.preferences || ''}">

          <label for="verified">Verificado:</label>
          <select id="verified" class="swal2-select">
            <option value="true" ${this.currentUser?.verified ? 'selected' : ''}>Sí</option>
            <option value="false" ${!this.currentUser?.verified ? 'selected' : ''}>No</option>
          </select>
        </div>
      `,
      focusConfirm: false,
      preConfirm: () => {
        return {
          username: (document.getElementById('username') as HTMLInputElement).value,
          biography: (document.getElementById('biography') as HTMLTextAreaElement).value,
          email: (document.getElementById('email') as HTMLInputElement).value,
          phoneNumber: (document.getElementById('phoneNumber') as HTMLInputElement).value,
          preferences: (document.getElementById('preferences') as HTMLInputElement).value,
          verified: (document.getElementById('verified') as HTMLSelectElement).value === 'true',
        };
      },
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      cancelButtonText: 'Cancelar',
    });

    if (formValues) {
      // Actualiza el perfil en el frontend (sin backend)
      const updatedUser: User = {
        ...this.currentUser!,
        username: formValues.username,
        biography: formValues.biography,
        email: formValues.email,
        phoneNumber: formValues.phoneNumber,
        preferences: formValues.preferences,
        verified: formValues.verified,
      };

      // Actualiza el usuario localmente
      this.currentUser = updatedUser;

      Swal.fire('¡Éxito!', 'Perfil actualizado con éxito.', 'success');
    }
  }

  async onUpload(event: Event): Promise<void> {
    const inputFile = event.target as HTMLInputElement;
    if (!inputFile.files || inputFile.files.length <= 0) {
      return;
    }
    const file: File = inputFile.files[0];
    const fileName = uuidv4();  // Simula un nombre único de archivo
    const folderName = this.currentUser!.username + '/profile';  // Carpeta para la imagen (solo frontend)

    // Simula la respuesta con la URL de la imagen cargada
    const response = {
      profilePictureUrl: `https://example.com/uploads/${fileName}`,
    };

    // Actualiza la URL de la foto de perfil
    const updatedUser: User = {
      ...this.currentUser!,
      profilePicture: response.profilePictureUrl,
    };

    // Actualiza el usuario localmente (sin enviar al backend)
    this.currentUser = updatedUser;

    Swal.fire('¡Éxito!', 'Foto de perfil actualizada.', 'success');
  }
}
