import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  // Usamos el arreglo que me proporcionaste
  EventoConferencias = [
    {
      idconf: '1',
      titulo: 'Angular 10',
      fecha: '10/02/2022',
      lugar: 'Salón 1',
      duracion: '3 horas',
      descripcion: 'Conferencia sobre Angular 10',
      imgconf: './assets/img/Angular.jpg'
    },
    {
      idconf: '2',
      titulo: 'Ionic 5',
      fecha: '15/02/2022',
      lugar: 'Salón 2',
      duracion: '4 horas',
      descripcion: 'Conferencia sobre Ionic 5',
      imgconf: './assets/img/Ionic.jpg'
    },
    {
      idconf: '3',
      titulo: 'React Native',
      fecha: '20/02/2022',
      lugar: 'Salón 3',
      duracion: '5 horas',
      descripcion: 'Conferencia sobre React Native',
      imgconf: './assets/img/React.jpg'
    }
  ];
  EventoTalleres=[
    {
      idtar: '100',
      titulo: 'Taller de Git y Github',
      fecha: '12/02/2022',
      lugar: 'Salón 4',
      duracion: '2 horas',
      descripcion: 'Taller sobre Git y Github',
      imgtar:'./assets/img/Github.png'
    },
    {
      idtar: '101',
      titulo: 'Taller de Angular',
      fecha: '17/02/2022',
      lugar: 'Salón 5',
      duracion: '3 horas',
      descripcion: 'Taller sobre Angular',
      imgtar:'./assets/img/Angular.jpg'
    },
    {
      idtar: '102',
      titulo: 'Taller de Ionic',
      fecha: '22/02/2022',
      lugar: 'Salón 6',
      duracion: '4 horas',
      descripcion: 'Taller sobre Ionic',
      imgtar:'./assets/img/Ionic.jpg'
    }];
    EventoConcursos=[
      {
        idconc: '1001',
        titulo: 'Concurso de Angular',
        fecha: '14/02/2022',
        lugar: 'Salón 7',
        duracion: '6 horas',
        descripcion: 'Concurso sobre Angular',
        imgconc:'./assets/img/Angular.jpg'
      },
      {
        idconc: '1002',
        titulo: 'Concurso de Ionic',
        fecha: '19/02/2022',
        lugar: 'Salón 8',
        duracion: '7 horas',
        descripcion: 'Concurso sobre Ionic',
        imgconc:'./assets/img/Ionic.jpg'
      },
      {
        idconc: '1003',
        titulo: 'Concurso de React Native',
        fecha: '25/02/2022',
        lugar: 'Salón 9',
        duracion: '8 horas',
        descripcion: 'Concurso sobre React Native',
        imgconc:'./assets/img/React.jpg'
      }];
  constructor() { }

  // Método para obtener todas las conferencias
  obtenerEventos() {
    return this.EventoConferencias;
  }
  obtenerEventos2() {
    return this.EventoTalleres;
  }
  obtenerEventos3() {
    return this.EventoConcursos;
  }
  // Método para obtener una conferencia por ID
  obtenerEventoPorId(id: string) {
    return this.EventoConferencias.find(conferencia => conferencia.idconf === id);
  }
  obtenerEventoPorId2(id: string) {
    return this.EventoTalleres.find(taller => taller.idtar === id);
  }
  obtenerEventoPorId3(id: string) {
    return this.EventoConcursos.find(concurso => concurso.idconc === id);
  }
}
