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



