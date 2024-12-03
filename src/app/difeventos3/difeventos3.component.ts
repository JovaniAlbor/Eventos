import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventosService } from '../eventos.service';  // Inyectar el servicio

@Component({
  selector: 'app-difeventos3',
  templateUrl: './difeventos3.component.html',
  styleUrls: ['./difeventos3.component.scss'],
})
export class Difeventos3Component implements OnInit {
  Concursos: any;  // Usamos Conferencias en lugar de evento

  constructor(
    private router: Router,
    private eventosService: EventosService  // Inyectar el servicio en el constructor
  ) {}

  ngOnInit() {
    this.Concursos = this.eventosService.obtenerEventos3();  // Obtener las conferencias del servicio
  }

  verDetallesEvento(id: string) {
    this.router.navigate([`/detalle-evento`, id]);  // Navegar con el ID del evento
  }
}