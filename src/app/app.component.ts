import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/components/footer/footer.component';
import { NavbarComponent } from './layout/components/navbar/navbar.component';
import { ItemsService } from '../items/items.service';
import { CommonModule } from '@angular/common';  // Importa CommonModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavbarComponent, CommonModule],  // Agrega CommonModule aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: any[] = [];
  title = 'AirCNC2';

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    // Realizar la solicitud al servicio y almacenar los elementos recibidos
    this.itemsService.getItems().subscribe(
      (data) => {
        this.items = data; // Asignar la respuesta a la propiedad items
      },
      (error) => {
        console.error('Error al obtener los items', error);
      }
    );
  }

  togglebtn() {
    let navBar = document.getElementById('navBar');
    navBar!.classList.toggle('hidemenu');
  }
}
