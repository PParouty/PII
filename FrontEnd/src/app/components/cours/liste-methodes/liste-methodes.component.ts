import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CoursService } from '../../../services/cours.service';
import { Methode } from '../../../models/cours.model';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

// listing des methodes 

@Component({
  selector: 'app-liste-methodes',
  standalone: true,
  imports: [CommonModule, MatListModule, MatButtonModule, RouterModule],
  templateUrl: './liste-methodes.component.html',
  styleUrls: ['./liste-methodes.component.css']
})


export class ListeMethodesComponent {
  matiere: string | null = null;
  methodes: Methode[] = [];

  constructor(
    private route: ActivatedRoute,
    private coursService: CoursService,
    private router: Router
  ) { }



  ngOnInit(): void {
    this.matiere = this.route.snapshot.paramMap.get('matiere');

    if (this.matiere) {
      this.coursService.getMethodesByMatiere(this.matiere).subscribe({
        next: methodes => this.methodes = methodes,
        error: err => console.error("Petit probleme lors du chargement des methodes :", err)
      });
    }

  }

  retour(): void {
    console.log("Matière chargée :", this.matiere);
    console.log("Méthodes récupérées :", this.methodes);
    this.router.navigate(['/cours']);
  }
}






