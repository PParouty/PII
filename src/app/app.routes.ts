import { Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
//import { ExercicesComponent } from './pages/exercices/exercices.component';
import { ExercicesComponent } from './components/Exercices/exercices.component';

export const routes: Routes = [
    { path: '', component: AccueilComponent },   // '' sinifie que cest la route par defaut (donc page d'accueil direct)                         // penser a les rajouter dans la Routes
    { path: 'exercices', component: ExercicesComponent }



    //{ path: 'exercices', component: ExercicesComponent }
];



// sur cette page on apporte les ROUTES cest a dire les fichier depuis le dossier PAGES 