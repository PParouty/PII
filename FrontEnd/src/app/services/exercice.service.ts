

// modification pour itiliser le back


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Exercice } from '../models/exercice.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciceService {
  private apiUrl = 'http://localhost:5132/api/exercice'; // lien vers l'API

  constructor(private http: HttpClient) { } // utiliser HttpClient

  getExercices(): Observable<Exercice[]> {
    return this.http.get<Exercice[]>(this.apiUrl);
  }

  getExerciceById(id: number): Observable<Exercice> {
    return this.http.get<Exercice>(`${this.apiUrl}/${id}`);
  }

  getQCMsParMatiere(matiere: string): Observable<Exercice[]> {
    return this.http.get<Exercice[]>(`${this.apiUrl}/matiere/${matiere}/type/QCM`);
  }
}






