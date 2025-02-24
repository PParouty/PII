import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accueil',
  standalone: true,  //  Obligatoire pour Standalone
  imports: [CommonModule], //  Importe les modules nécessaires
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent { }

