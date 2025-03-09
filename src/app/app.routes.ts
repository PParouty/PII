import { Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
//import { ExercicesComponent } from './pages/exercices/exercices.component';
import { ExercicesComponent } from './components/Exercices/exercices.component';
import { ListeMatieresComponent } from './components/cours/liste-matieres/liste-matieres.component';
import { ListeMethodesComponent } from './components/cours/liste-methodes/liste-methodes.component';
import { MethodeDetailComponent } from './components/cours/methode-detail/methode-detail.component';



export const routes: Routes = [
    { path: '', component: AccueilComponent },   // '' sinifie que cest la route par defaut (donc page d'accueil direct)                         // penser a les rajouter dans la Routes
    { path: 'exercices', component: ExercicesComponent },
    { path: 'cours', component: ListeMatieresComponent },
    { path: 'cours/:matiere', component: ListeMethodesComponent },
    { path: 'cours/:matiere/:id', component: MethodeDetailComponent }



    //{ path: 'exercices', component: ExercicesComponent }
];



// sur cette page on apporte les ROUTES cest a dire les fichier depuis le dossier PAGES 