import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cours, Methode } from '../models/cours.model';
@Injectable({
  providedIn: 'root'
})
export class CoursService {
  private apiUrl = 'http://localhost:5132/api'; // tjrs le meme lien vers l'api que celui utilisé dans exercice.service.ts

  constructor(private http: HttpClient) { }

  // 🔹 Obtenir toutes les matières (donc tous les cours)
  getCours(): Observable<Cours[]> {
    return this.http.get<Cours[]>(`${this.apiUrl}/cours`);
  }

  getMatieres(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/cours`);
  }
  // 🔹 Obtenir toutes les méthodes d’une matière spécifique
  getMethodesByMatiere(matiere: string): Observable<Methode[]> {
    return this.http.get<Methode[]>(`${this.apiUrl}/cours/${matiere}`); // renvoie un Observable<Methode[]>, c'est a dire : un flux de tableau de méthodes
    // dans le componant on subscribera a ce flux pour recuperer les données du flux et pouvoir les utiliser 
    // en gros -> on inject le service
    //  -> on renvoi un flux qd le service marche
    // -> il faut abonner le composant au flux pour qu'il puisse utiliser les données 
  }

  // 🔹 Obtenir une méthode spécifique par son ID et sa matière
  getMethodeById(matiere: string, id: number): Observable<Methode> {
    return this.http.get<Methode>(`${this.apiUrl}/cours/${matiere}/methode/${id}`); // doit eter au singulier !
  }
}





















// EXPLICATION OBSERVABLE :
/*

Un observable est un flux de donnée qui est asynchrone -> donc qui peut arriver avec un delai, donc par exemple depuis une API ou il peut y avoir de la latence

Etant donné qu'on reçois les données depuis le flux de maniere asyncrhone, il faut "s'abonner" a ce flux pour pouvoir les recevoir quand elle arrive

-> d'ou le .subscribe qu'on doit utiliser dans le composant (le composant sub au flux de donné pour pouvoir les recevoir)

Les observable permettent aussi de réagir quand les données arrives, comme avec un commentaire en gros, par ex : "error," si ya une erreur qql part ou "next" pour recuperer les trucs suivantes etc

// cest un mini newletter/ reseau sociau avec réaction  */



