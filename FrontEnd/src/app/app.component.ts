import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExercicesComponent } from './components/Exercices/exercices.component';

@Component({
  selector: 'app-root',
  standalone: true,  // 
  imports: [CommonModule, RouterOutlet, NavbarComponent, AccueilComponent, ExercicesComponent], //  On importe la Navbar
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
