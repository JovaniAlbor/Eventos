import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { eventosService } from '../eventos.service';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
conferencias:any[]=[];
talleres:any[]=[];
concursos:any[]=[];
imageUrl: string = '';

  constructor(private eventosService: eventosService,private http: HttpClient, private alertController: AlertController) {}

  ngOnInit() {
    // Obtener conferencias
    this.eventosService.getConferencias().subscribe(
      (data) => {
        this.conferencias = data;
        console.log('Conferencias:', this.conferencias);
      },
      (error) => {
        console.error('Error al obtener las conferencias', error);
      }
    );

    // Obtener eventos
    this.eventosService.getTalleres().subscribe(
      (data) => {
        this.talleres = data;
        console.log('Talleres:', this.talleres);
      },
      (error) => {
        console.error('Error al obtener los talleres', error);
      }
    );

    // Obtener ponentes
    this.eventosService.getConcursos().subscribe(
      (data) => {
        this.concursos = data;
        console.log('Concursos:', this.concursos);
      },
      (error) => {
        console.error('Error al obtener los concursos', error);
      }
    );
  }
  
}

