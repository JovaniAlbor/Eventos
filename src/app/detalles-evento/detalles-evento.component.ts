import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from '../eventos.service';  // Inyectar el servicio


@Component({
  selector: 'app-detalle-evento',
  templateUrl: './detalles-evento.component.html',
  styleUrls: ['./detalles-evento.component.scss'],
})
export class DetalleEventoComponent implements OnInit {
  conferenciaId: string | null = null;  // Inicializar como null o string (puede ser null)
  conferencia: any;  
  tallerId: string | null = null;  // Inicializar como null o string (puede ser null)
  taller: any;  
  concursoId: string | null = null;  // Inicializar como null o string (puede ser null)
  concurso: any;

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
      
    }),
    this.route.paramMap.subscribe(params => {
      this.tallerId = params.get('id'); // Obtener el id de la URL

      if (this.tallerId) {  // Asegurarnos de que el id no sea null
        this.taller = this.eventosService.obtenerEventoPorId2(this.tallerId); // Obtener la conferencia usando el servicio
      } else {
        console.error('ID de conferencia no encontrado.');
      }
      
    }),
    this.route.paramMap.subscribe(params => {
      this.concursoId = params.get('id'); // Obtener el id de la URL

      if (this.concursoId) {  // Asegurarnos de que el id no sea null
        this.concurso = this.eventosService.obtenerEventoPorId3(this.concursoId); // Obtener la conferencia usando el servicio
      } else {
        console.error('ID de conferencia no encontrado.');
      }
      
    });
  }
  }


