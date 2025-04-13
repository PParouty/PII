import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CoursService } from '../../../services/cours.service';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-liste-matieres',
  standalone: true,
  imports: [CommonModule, MatListModule, MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './liste-matieres.component.html',
  styleUrls: ['./liste-matieres.component.css']
})



export class ListeMatieresComponent {
  matieres: string[] = [];
  matiereImages: { [key: string]: string } = {
    'maths': 'assets/img/matieres/maths.png',
    'histoire': 'assets/img/matieres/histoire.png',
    'français': 'assets/img/matieres/francais.png',
    'svt': 'assets/img/matieres/svt.png',
    'musique': 'assets/img/matieres/musique.png',
    'arts plastiques': 'assets/img/matieres/arts.png',
    'physique-Chimie': 'assets/img/matieres/physique.png'
  };
  constructor(private coursService: CoursService) { }

  ngOnInit(): void {

    this.coursService.getMatieres().subscribe({ // ici qu'on subscribe au flux de donnée pour bien les recevoir de maniere asyncrhone et pouvoir les utiliser 
      next: matieres => this.matieres = matieres,

      //this.matieres = cours.map(c => c.matiere)

      error: err => console.error('Petit probleme de chargement des cours', err)
    });

  }
}









/* vieux truc :
@Component({
  selector: 'app-liste-matieres',
  standalone: true,
  imports: [CommonModule, MatListModule, MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './liste-matieres.component.html',
  styleUrls: ['./liste-matieres.component.css']
})
export class ListeMatieresComponent {
  matieres: string[];

  constructor(private coursService: CoursService) {
    this.matieres = this.coursService.getMatieres();
  }
}

*/