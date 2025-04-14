






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
