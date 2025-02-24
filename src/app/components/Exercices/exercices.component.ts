import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ExerciceService } from '../../services/exercice.service';
import { Exercice, QCM } from '../../models/exercice.model';
import { FormsModule } from '@angular/forms';


// on declare le component avec ses details : 

@Component({
  selector: 'app-exercices',
  standalone: true,
  imports: [CommonModule, MatButtonModule, FormsModule],
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.css']
})


export class ExercicesComponent implements OnInit {
  exercices: Exercice[] = [];
  exerciceSelectionne: Exercice | null = null;
  questions: QCM[] | undefined = [];
  reponseUtilisateur: string = "";  // pour stocker la reponse de l'utilisateur
  correctionVisible: boolean = false; // de base on affiche pas la correction 
  messageCorrection: string = "";

  constructor(private exerciceService: ExerciceService) { } // on inject le service

  ngOnInit(): void {
    this.exercices = this.exerciceService.getExercices(); // on applique l'init
  }

  choisirExercice(exercice: Exercice): void {
    this.exerciceSelectionne = exercice;
    this.reponseUtilisateur = "";
    this.correctionVisible = false;
    this.messageCorrection = "";

    if (exercice.type === 'QCM') {
      this.questions = this.exerciceService.getQCMById(exercice.id);
    } else {
      this.questions = undefined;
    }
  }

  validerReponse(): void {
    // On verifie que lexo existe
    if (!this.exerciceSelectionne || !this.exerciceSelectionne.correction) {
      return; // on stop la methode si l'exo existe pas ou qu'il n'a pas de correction
    }

    // Vérification que la répons existe
    if (!this.reponseUtilisateur || this.reponseUtilisateur.trim() === "") {  // .trim suprime les espaces en trop dans les réponses 
      this.messageCorrection = " Il faut entrer une valeur svp.";
      return;
    }

    // Comparaison pour un QCM
    if (this.exerciceSelectionne.type === 'QCM') {
      if (this.exerciceSelectionne.correction.toLowerCase() === this.reponseUtilisateur.toLowerCase()) { // on met tout en minuscule pour ne pas avoir de probleme de comparaison
        this.messageCorrection = "Bravo ! Bonne réponse.";
      } else {
        this.messageCorrection = " Mauvaise réponse. Retournez travailler !";
      }
    } else {
      // Comparaison pour un exo ou l'utilisateur rentre lui même la réponse 
      if (this.reponseUtilisateur.trim().toLowerCase() === this.exerciceSelectionne.correction.trim().toLowerCase()) {
        this.messageCorrection = "Bravo ! Bonne réponse.";
      } else {
        this.messageCorrection = "Mauvaise réponse. Retournez travailler !";
      }
    }

    this.correctionVisible = true;  // On affiche la correction 
  }




}




/*

export class ExercicesComponent implements OnInit {

  exercicesTab: Exercice[] = []; // on initialise une liste vide d'exo
  exerciceSelectionne: Exercice | null = null; // L'exo individuel qui nous interesserait
  questions: QCM[] | undefined = []; // Pareil mais si cest un QCM

  constructor(private exerciceService: ExerciceService) { } // Ici on "inject" le service
  // cest comme ça qu'on va pouvoir recuperer tous les exo et reutiliser le component a droite a gauche 

  ngOnInit(): void {
    this.exercicesTab = this.exerciceService.getExercices(); // on recup la liste des exo 
  }

  // explication ngOnInit => s'execute automatiquement apres l'initialisaiton du component
  /* voir apres l'affichage du html 
  ça permettra d'effectuer des modifications apres le chargement de l'html
en gros pour l'instant de ce que je comprends : ça sert a effectuer des actions apres la creation du component 
de maniere dynamique (affichage par ex) 

  */


/*

  choisirExercice(exercice: Exercice): void {
    this.exerciceSelectionne = exercice;
    if (exercice.type === 'QCM') {
      this.questions = this.exerciceService.getQCMById(exercice.id);
    } else {
      this.questions = undefined;
    }
  }
}

*/
