import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../app/core/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,  // Esta línea es correcta si estás usando componentes standalone
  imports: [ReactiveFormsModule], // Aquí solo debes incluir módulos, no servicios
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService // Inyecta el servicio aquí (no en imports)
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  async onLogin() {
    if (this.loginForm.invalid) {
      Swal.fire('Error', 'Diligencie el formulario correctamente.', 'error');
      return;
    }

    const { username, password } = this.loginForm.value;

    // try {
    //   const user = await this.authService.login(username, password);
    //   // Si la autenticación es exitosa, guarda el usuario en la sesión
    //   localStorage.setItem('loggedInUser', JSON.stringify(user));

    //   // Redirige al usuario a la página de inicio
    //   this.router.navigateByUrl('/home');
    //   Swal.fire('Éxito', 'Has iniciado sesión correctamente.', 'success');
    // } catch (error) {
    //   Swal.fire('Error', 'Credenciales incorrectas.', 'error');
    // }
  }
}
