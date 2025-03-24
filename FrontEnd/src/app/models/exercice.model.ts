
/*// l'enum pour les differents niveaux d'exercices

export enum Niveau {
    Facile = '1', // restitution
    Moyen = '2', // comparaison
    Difficile = '3', // illustration
    Expert = '4', // production 
}


export interface Exercice {
    id: number;
    matiere: string;
    titre: string;
    description: string;
    niveau: Niveau;
    correction: string;
    type?: 'QCM' | 'Texte' | 'calculs'; // Si on veut en option donner un type au cas ou plus tard
    options?: string[]; // Les numeros de réponse possible en tableau comme : ['A','B','C']
}
*/



export enum Niveau {
    Facile = '1', // restitution
    Moyen = '2', // comparaison
    Difficile = '3', // illustration
    Expert = '4', // production 
}
export interface QCM {
    question: string;
    options: string[];
    correction: string;
}

export interface Exercice {
    id: number;
    matiere: string;
    titre: string;
    description: string;
    niveau: Niveau;
    correction?: string; // Optionnel si c'est un QCM
    type: 'QCM' | 'Texte' | 'Calculs';
    options?: string[];
    QCM?: QCM[]; // Liste des questions pour le type QCM
}
