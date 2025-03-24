

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








// ancienne version :


/*import { Injectable } from '@angular/core';
import { Exercice, Niveau, QCM } from '../models/exercice.model'; // Niveau et QCM aussi

@Injectable({
  providedIn: 'root'
})
export class ExerciceService {
  private exercices: Exercice[] = [
    {
      id: 1,
      matiere: 'Maths',
      titre: 'Addition pour 6e',
      description: 'Calculez : 12 + 8, 727 + 1298, 191827 + 12901869',
      niveau: Niveau.Facile,
      correction: 'Les réponses sont 20 ; 2025 ; 13093696',
      type: 'Calculs'
    },
    {
      id: 2,
      matiere: 'Histoire',
      titre: 'La Révolution Française',
      description: 'Donnez la date de la prochaine révolution française.',
      niveau: Niveau.Facile,
      correction: '2025 on espere',
      type: 'Texte'
    },
    {
      id: 3,
      matiere: 'Histoire',
      titre: 'QCM : La Révolution Française',
      description: 'Répondez aux questions suivantes sur la Révolution Française.',
      niveau: Niveau.Facile,
      type: 'QCM',
      QCM: [
        {
          question: 'Quelle année marque le début de la Révolution française ?',
          options: ['1776', '1789', '1815', '1848'],
          correction: '1789'
        },
        {
          question: "Quelle est l'année de la prise de la Bastille ?",
          options: ['1790', '1798', '1789', '1767'],
          correction: '1789'
        },
        {
          question: "Qu'est-ce que la 'Terreur' ?",
          options: [
            'Une monarchie temporaire',
            'Une période de doutes et de craintes en Allemagne',
            'Le retour des guillotines en 1801',
            "État d'exception, caractérisé par un gouvernement révolutionnaire"
          ],
          correction: "État d'exception, caractérisé par un gouvernement révolutionnaire"
        }
      ]
    }
  ];

  getExercices(): Exercice[] {
    return this.exercices;
  }

  getExerciceById(id: number): Exercice | undefined {
    return this.exercices.find(exercice => exercice.id === id);
  }

  getQCMById(id: number): QCM[] | undefined {
    return this.exercices.find(ex => ex.id === id && ex.type === 'QCM')?.QCM;
  }


  getQCMsParMatiere(matiere: string): Exercice[] {
    return this.exercices.filter(ex => ex.matiere === matiere && ex.type === 'QCM');
  }



} // class



*/








































// Vieille option : 

/*



import { Injectable } from '@angular/core';
import { Exercice, Niveau } from '../models/exercice.model'; // penser a importer l'enum

@Injectable({
  providedIn: 'root'
})
export class ExerciceService {


  // Pour les exercices par matiere :

  private exercicesMaths: Exercice[] = [
    {
      id: 1,
      matiere: 'Maths',
      titre: 'Addition pour 6ieme',
      description: 'Calculez : 12 + 8,   727 + 1298,  191827 + 12901869',
      niveau: Niveau.Facile,
      correction: 'Les réponses sont 20 ; 2025 ; 13093696',
      type: 'calculs'
    },





  ];

  private exercicesHistoire: Exercice[] = [

    {
      id: 2,
      matiere: 'Histoire',
      titre: 'La revolution Française',
      description: 'Donnez la date de la prochaine revolution française svp',
      niveau: Niveau.Facile,
      correction: "Pour 727 + 1298 on espere",
      type: 'Texte'
    }



  ]







  // Pour les QCMs (on va devoir faire 1 tableau par QCM) :


  private exercicesQCM1: Exercice[] = [
    {
      id: 1,
      matiere: 'Histoire',
      titre: 'La Révolution Française',
      description: 'Quelle année marque le début de la Révolution française ?',
      niveau: Niveau.Facile,
      type: 'QCM',
      options: ['1776', '1789', '1815', '1848'],
      correction: '1789',
    },
    {
      id: 2,
      matiere: 'Histoire',
      titre: 'La Première Guerre Mondiale',
      description: "Quelle est l'année de la prise de la Bastille ?",
      niveau: Niveau.Facile,
      type: 'QCM',
      options: ['1790', '1798', '1789', '1767'],
      correction: '1789',
    },

    {
      id: 3,
      matiere: 'Histoire',
      titre: 'La Révolution Française',
      description: "Qu'est ce que la 'terreur' ?",
      niveau: Niveau.Facile,
      type: 'QCM',
      options: ['A : Une monarchie temporaire', ' B : Une periode de doutes et de craintes en Allemagne', 'C : Le retour des guillotines en 1801', " D : Etat d'exception, caractérisée par la mise en place d'un gouvernement révolutionnaire"],
      correction: 'D',
    }


  ];



  // Simulaiton de l'API en attendant pour tester vite fait : 


  // pour les Maths : 

  getExercicesMaths(): Exercice[] {  // on affiche le tableau des exercices (en réalité tous les exercices)
    return this.exercicesMaths;
  }

  getExerciceMathsById(id: number): Exercice | undefined { // si on trouve l'id, on retourne un Exercice, sinon un truc indefini
    return this.exercicesMaths.find(exercice => exercice.id === id);
  }




  // Pour l'histoire : 

  getExercicesHistoiere(): Exercice[] {
    return this.exercicesHistoire;
  }

  getExerciceHistoireById(id: number): Exercice | undefined {
    return this.exercicesMaths.find(exercice => exercice.id === id);
  }



  // Pour les QCM : 


  getExercicesQCM1(): Exercice[] {
    return this.exercicesQCM1;
  }







}// class 

*/