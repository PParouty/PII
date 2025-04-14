import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CoursService } from '../../../services/cours.service';
import { Methode } from '../../../models/cours.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

// on affiche le contenu de la methode
// le debut cest pareil : 

@Component({
  selector: 'app-methode-detail',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './methode-detail.component.html',
  styleUrls: ['./methode-detail.component.css']
})

// ensuite on modifie pour utiliser le back :


export class MethodeDetailComponent {
  methode!: Methode;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coursService: CoursService
  ) { }

  ngOnInit(): void {
    const matiere = this.route.snapshot.paramMap.get('matiere');
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (matiere) {
      this.coursService.getMethodeById(matiere, id).subscribe({
        next: methode => this.methode = methode,
        error: err => console.error('Methode indisponible (erreur)', err)
      });
    }
  }

  retour(): void {
    this.router.navigate(['/cours', this.route.snapshot.paramMap.get('matiere')]);
  }
}














