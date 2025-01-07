import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class eventosService {
  private apiUrlConferencias = 'http://localhost:3000/conferencias';
  private apiUrlTalleres = 'http://localhost:3000/talleres';
  private apiUrlConcursos = 'http://localhost:3000/concursos';

  constructor(private http: HttpClient) {}

  // Obtener conferencias
  getConferencias(): Observable<any> {
    return this.http.get<any[]>(this.apiUrlConferencias);
  }

  // Obtener eventos
  getTalleres(): Observable<any> {
    return this.http.get<any[]>(this.apiUrlTalleres);
  }

  // Obtener ponentes
  getConcursos(): Observable<any> {
    return this.http.get<any[]>(this.apiUrlConcursos);
  }
}