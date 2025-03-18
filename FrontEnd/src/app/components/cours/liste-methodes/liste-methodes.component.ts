import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CoursService } from '../../../services/cours.service';
import { Methode } from '../../../models/cours.model';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-liste-methodes',
  standalone: true,
  imports: [CommonModule, MatListModule, MatButtonModule, RouterModule],
  templateUrl: './liste-methodes.component.html',
  styleUrls: ['./liste-methodes.component.css']
})
export class ListeMethodesComponent {
  matiere: string | null = null;
  methodes: { id: number; titre: string }[] = [];

  constructor(private route: ActivatedRoute, private coursService: CoursService, private router: Router) {
    this.matiere = this.route.snapshot.paramMap.get('matiere');
    if (this.matiere) {
      this.methodes = this.coursService.getMethodesByMatiere(this.matiere);
    }
  }


  retour(): void {
    this.router.navigate(['/cours']); // Retourne à la liste des matières
  }

}

