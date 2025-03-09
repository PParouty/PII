




// une partie methode
export interface Methode {
    id: number;
    titre: string;
    introduction: string;
    contenu?: string;
    exemples?: string[];
    conclusion: string;
}

// une partie cours pour la'affichage des cours 
export interface Cours {
    matiere: string;
    methodes: Methode[];
}