import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventosService } from '../eventos.service';  // Inyectar el servicio

@Component({
  selector: 'app-difeventos',
  templateUrl: './difeventos.component.html',
  styleUrls: ['./difeventos.component.scss'],
})
export class DifeventosComponent implements OnInit {
  Conferencias: any;  // Usamos Conferencias en lugar de evento

  constructor(
    private router: Router,
    private eventosService: EventosService  // Inyectar el servicio en el constructor
  ) {}

  ngOnInit() {
    this.Conferencias = this.eventosService.obtenerEventos();  // Obtener las conferencias del servicio
  }

  verDetallesEvento(id: string) {
    this.router.navigate([`/detalle-evento`, id]);  // Navegar con el ID del evento
  }
}

