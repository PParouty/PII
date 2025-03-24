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
  reponsesUtilisateur: string[] = [];
  reponseUtilisateur: string = "";
  correctionVisible: boolean = false;
  messageCorrection: string = "";
  score: number = 0;

  constructor(private exerciceService: ExerciceService) { }

  ngOnInit(): void {
    this.exerciceService.getExercices().subscribe({
      next: (data) => this.exercices = data,
      error: () => console.error('Erreur lors du chargement des exercices')
    });
  }

  choisirExercice(exercice: Exercice): void {
    console.log("Exercice sélectionné :", exercice); // verification


    this.exerciceSelectionne = exercice;
    this.correctionVisible = false;
    this.messageCorrection = "";

    if (exercice.type === 'QCM' && exercice.QCM) { // le cas QCM 
      this.questions = exercice.QCM;
      this.reponsesUtilisateur = new Array(this.questions.length).fill("");
    } else {
      this.questions = undefined;
      this.reponseUtilisateur = "";
    }
  }

  enregistrerReponse(index: number, reponse: string): void {
    this.reponsesUtilisateur[index] = reponse;
  }

  validerReponse(): void {
    if (!this.exerciceSelectionne) {
      this.messageCorrection = "Aucun exercice sélectionné.";
      return;
    }

    if (this.exerciceSelectionne.type === 'QCM' && this.questions) {
      let bonnesReponses = 0;
      this.questions.forEach((question, index) => {
        if (this.reponsesUtilisateur[index] === question.correction) bonnesReponses++;
      });

      this.score = Math.round((bonnesReponses / this.questions.length) * 100);
      this.messageCorrection = `Score : ${bonnesReponses}/${this.questions.length} (${this.score}%)`;

      this.messageCorrection += this.score === 100
        ? "  Bravo, toutes les réponses sont correctes !"
        : this.score >= 50
          ? " Pas mal, mais tu peux faire mieux !"
          : " Attention, révise encore un peu !";

      this.correctionVisible = true;
      return;
    }

    // Cas autre (texte, calculs)
    if (this.reponseUtilisateur.trim().toLowerCase() === this.exerciceSelectionne.correction?.trim().toLowerCase()) {
      this.messageCorrection = "Bravo ! Bonne réponse.";
    } else {
      this.messageCorrection = `Mauvaise réponse. La correction est : ${this.exerciceSelectionne.correction}`;
    }

    this.correctionVisible = true;
  }

  reinitialiser(): void {  // car sinon on réinitialise pas les réponses utilisateurs cest ultra embettant 
    this.exerciceSelectionne = null; // on reprend bien les parametres de defaut de chaque éléments
    this.questions = undefined;
    this.reponsesUtilisateur = [];
    this.reponseUtilisateur = "";
    this.correctionVisible = false;
    this.messageCorrection = "";
  }

}




/*


Ancienne version : 




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
console.log("Exercice sélectionné :", exercice); 
console.log("Questions :", this.questions); 
console.log("Réponses utilisateur :", this.reponsesUtilisateur); 
console.log("Réponse utilisateur :", this.reponseUtilisateur); 
console.log("Correction visible :", this.correctionVisible); 
console.log("Message correction :", this.messageCorrection); 
console.log("Score :", this.score);


export class ExercicesComponent implements OnInit {
  exercices: Exercice[] = [];
  exerciceSelectionne: Exercice | null = null;
  questions: QCM[] | undefined = [];
  reponsesUtilisateur: string[] = [];  // Stocke les réponses de l'utilisateur pour ensuite comparer avec la correction
  reponseUtilisateur: string = "";  // Stocke une seule réponse pour les exercices texte/calculs -> posera probleme plus tard surement car il faudra comparer les string -> bon que en calcule
  correctionVisible: boolean = false;
  messageCorrection: string = "";
  score: number = 0;

  constructor(private exerciceService: ExerciceService) { }

  ngOnInit(): void {
    this.exercices = this.exerciceService.getExercices();
  }




  choisirExercice(exercice: Exercice): void {
    this.exerciceSelectionne = exercice;

    // VS undefined de merde
    const nombreQuestions = exercice.type === 'QCM' ? this.exerciceService.getQCMById(exercice.id)?.length ?? 0 : 1;

    this.reponsesUtilisateur = new Array(nombreQuestions).fill("");

    this.correctionVisible = false;
    this.messageCorrection = "";

    if (exercice.type === 'QCM') {
      this.questions = this.exerciceService.getQCMById(exercice.id) || [];
    } else {
      this.questions = undefined;
    }
  }

  // Stocker la réponse sélectionnée pour chaque question pour les comparer avec les correcions
  enregistrerReponse(index: number, reponse: string): void {
    this.reponsesUtilisateur[index] = reponse;
  }

  //  Vérifier les réponses puis afficher le score
  validerReponse(): void {
    if (!this.exerciceSelectionne) {
      this.messageCorrection = " Aucun exercice sélectionné.";
      return;
    }

    // Cas des QCM
    if (this.exerciceSelectionne.type === 'QCM' && this.questions) {
      let bonnesReponses = 0;

      this.questions.forEach((question, index) => {
        if (this.reponsesUtilisateur[index] && this.reponsesUtilisateur[index] === question.correction) {
          bonnesReponses++;
        }
      });

      this.score = Math.round((bonnesReponses / this.questions.length) * 100);
      this.messageCorrection = ` Score : ${bonnesReponses}/${this.questions.length} (${this.score}%)`;

      if (this.score === 100) {
        this.messageCorrection += " Bravo, toutes les réponses sont correctes !";
      } else if (this.score >= 50) {
        this.messageCorrection += " Pas mal, mais vous pouvez faire mieux !";
      } else {
        this.messageCorrection += " Attention, révisez encore un peu !";
      }

      this.correctionVisible = true;  // Afficher le score pour user
      return;
    }

    // Cas des exercices texte/calcul
    if (this.exerciceSelectionne.type !== 'QCM') {
      // Verification que l'utilisateur a rentré une valeur
      if (!this.reponseUtilisateur || this.reponseUtilisateur.trim() === "") { // on essai de diminuer la casse
        this.messageCorrection = "Veuillez entrer une réponse avant de valider.";
        return;
      }

      // Comparaison de la réponse utilisateur avec la correction
      if (this.exerciceSelectionne.correction &&
        this.reponseUtilisateur.trim().toLowerCase() === this.exerciceSelectionne.correction.trim().toLowerCase()) { // on essai de diminuer la casse
        this.messageCorrection = "Bravo ! Bonne réponse.";
      } else {
        this.messageCorrection = `Mauvaise réponse. La correction est : ${this.exerciceSelectionne.correction}`;
      }

      this.correctionVisible = true;  // Afficher la correction après validation de la réponse par l'utilisareur
    }
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
