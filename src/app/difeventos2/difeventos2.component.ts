import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventosService } from '../eventos.service';  // Inyectar el servicio

@Component({
  selector: 'app-difeventos2',
  templateUrl: './difeventos2.component.html',
  styleUrls: ['./difeventos2.component.scss'],
})
export class Difeventos2Component implements OnInit {
  Talleres: any;  // Usamos Conferencias en lugar de evento

  constructor(
    private router: Router,
    private eventosService: EventosService  // Inyectar el servicio en el constructor
  ) {}

  ngOnInit() {
    this.Talleres = this.eventosService.obtenerEventos2();  // Obtener las conferencias del servicio
  }

  verDetallesEvento(id: string) {
    this.router.navigate([`/detalle-evento`, id]);  // Navegar con el ID del evento
  }
}