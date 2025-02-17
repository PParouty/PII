import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-navbar',
  standalone: true,  //  Obligatoire pour Standalone
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule], //  Import des modules nécessaires
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent { }

