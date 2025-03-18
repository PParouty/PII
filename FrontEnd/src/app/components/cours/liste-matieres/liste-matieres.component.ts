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
  matieres: string[];

  constructor(private coursService: CoursService) {
    this.matieres = this.coursService.getMatieres();
  }
}