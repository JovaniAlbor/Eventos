import { Component } from '@angular/core';
import { eventosService } from '../eventos.service';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  conferencias: any[] = [];
  talleres: any[] = [];
  concursos: any[] = [];
  filteredConferencias: any[] = [];
  filteredTalleres: any[] = [];
  filteredConcursos: any[] = [];
  searchQuery: string = '';

  constructor(
    private eventosService: eventosService,
    private http: HttpClient,
    private alertController: AlertController,
    private router: Router
  ) {}
  goToEventDetails(event: any) {
  this.router.navigate(['/event-details'], {
    state: { event: event }  // Pasando el objeto del evento completo
  });
}

  ngOnInit() {
    // Obtener conferencias
    this.eventosService.getConferencias().subscribe(
      (data) => {
        console.log('Conferencias:', data);  // Verifica los datos
        this.conferencias = data;
        this.filteredConferencias = data;
      },
      (error) => {
        console.error('Error al obtener las conferencias', error);
      }
    );

    // Obtener talleres
    this.eventosService.getTalleres().subscribe(
      (data) => {
        this.talleres = data;
        this.filteredTalleres = data;
      },
      (error) => {
        console.error('Error al obtener los talleres', error);
      }
    );

    // Obtener concursos
    this.eventosService.getConcursos().subscribe(
      (data) => {
        this.concursos = data;
        this.filteredConcursos = data;
      },
      (error) => {
        console.error('Error al obtener los concursos', error);
      }
    );
  }

  // Función para manejar el filtrado
  onSearch() {
    console.log('Buscando con el término:', this.searchQuery);
    const query = this.searchQuery.toLowerCase();
  
    // Filtrar las conferencias
    this.filteredConferencias = this.conferencias.filter(conferencia =>
      conferencia && conferencia.titulo && conferencia.titulo.toLowerCase().includes(query) ||
      conferencia && conferencia.descripcion && conferencia.descripcion.toLowerCase().includes(query) ||
      (conferencia && conferencia.idcon && conferencia.idcon.toString().includes(query)) // Cambiado a idcon
    );
  
    // Filtrar los talleres
    this.filteredTalleres = this.talleres.filter(taller =>
      taller && taller.titulo && taller.titulo.toLowerCase().includes(query) ||
      taller && taller.descripcion && taller.descripcion.toLowerCase().includes(query) ||
      (taller && taller.idtar && taller.idtar.toString().includes(query)) // Cambiado a idtar
    );
  
    // Filtrar los concursos
    this.filteredConcursos = this.concursos.filter(concurso =>
      concurso && concurso.titulo && concurso.titulo.toLowerCase().includes(query) ||
      concurso && concurso.descripcion && concurso.descripcion.toLowerCase().includes(query) ||
      (concurso && concurso.idconc && concurso.idconc.toString().includes(query)) // Cambiado a idconc
    );
  }
  
}