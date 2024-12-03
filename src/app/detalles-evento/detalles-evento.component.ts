import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventosService } from '../eventos.service';  // Inyectar el servicio
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-detalle-evento',
  templateUrl: './detalles-evento.component.html',
  styleUrls: ['./detalles-evento.component.scss'],
})
export class DetalleEventoComponent implements OnInit {
  conferenciaId: string | null = null;  // Inicializar como null o string (puede ser null)
  conferencia: any;  // Usamos conferencia en lugar de evento

  constructor(
    private route: ActivatedRoute,
    private eventosService: EventosService  // Inyectar el servicio
  ) {}

  ngOnInit() {
    // Obtener el id desde la URL
    this.route.paramMap.subscribe(params => {
      this.conferenciaId = params.get('id'); // Obtener el id de la URL

      if (this.conferenciaId) {  // Asegurarnos de que el id no sea null
        this.conferencia = this.eventosService.obtenerEventoPorId(this.conferenciaId); // Obtener la conferencia usando el servicio
      } else {
        console.error('ID de conferencia no encontrado.');
      }
    });
  }
}

