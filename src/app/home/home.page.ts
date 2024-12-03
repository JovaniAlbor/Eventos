import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  // Método de navegación genérico
  navigateToComponent(route: string) {
    this.router.navigate([route]);  // Navegar a la ruta especificada
  }
}

