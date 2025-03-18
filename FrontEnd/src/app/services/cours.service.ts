import { Injectable } from '@angular/core';
import { Cours, Methode } from '../models/cours.model';


@Injectable({
  providedIn: 'root'
})
export class CoursService {
  private coursList = [
    {
      matiere: 'Maths',
      methodes: [
        {
          id: 1,
          titre: "Introduction au concepte d'addition",
          introduction: "Apprenez à additionner efficacement des nombres.",
          contenu: "Le principe d'addition est fondamental en mathématique mais aussi dans la vie de tous les jours. \n \n Pour additionner, vous pouvez vous servir de vos doigts comme aide : \n prenez 2 doigts, lorsqu'on dit '+ 1' vous ouvrez un nouveau doigt, et avez maintenant 3 doigts. C'est le concept de l'addition ! Vous ajoutez des elements les uns, apres les autres.",
          exemples: ["Voici un petit exemple : 2 + 1 = 2 doigts ouvert + 1 nouveau doigt ouvert = 3 doigts ouvert sur votre main", "Voici un deuxieme exemple plus avancé : 99 + 10 = 109. Pour vous aider, vous pouvez avoir recours à une decomposition comme cela : \n 10 = 9 + 1 donc 99 + 10 = 99 + 1 + 9 = 100 + 9 = 109 !! Facil non ? "],
          conclusion: "L'addition permet d'ajouter un nombre à un autre. Dans le doute rappelez vous ce qu'il se passe lorsque vous avez 2 bonbons et decider d'en acheter 1 de plus : vous en avez maintenant 3 :-)"
        }
      ]
    },
    {
      matiere: 'Histoire',
      methodes: [
        {
          id: 2,
          titre: 'La Révolution Française - Première partie ',
          introduction: "Contexte et causes de la Révolution Française.",
          contenu: "En 1789, le peuple français se soulève contre l'Ancien Régime suite à de nomnreux manque de réspect de la part de la monarchie. \n Effectivement, le peuple avait faim, et la royauté ne faisait rien, aussi en 1789 le debuta ce que l'on appel 'La Revolution Française' jusqu'en 1799. En 1789 a lieu la prise de la Bastille, qui symbolise la prise des armes par le peuple. En 1793 debute la terreur, qui est peut être defini comme 'État d'exception, caractérisé par un gouvernement révolutionnaire. ",
          //exemples: 
          conclusion: "La Révolution a mis fin à la monarchie absolue et ouvert une nouvelle ère que nous verrons plus tard. A savoir aujourd'hui : \n 1789 debut de la revolution,et prise de la bastille la même année. \n 1793 debut de la terreur qui est definie comme  un état d'exception, caractérisé par un gouvernement révolutionnaire. \n Fin de la révolution française en 1799."
        }
      ]
    }
  ];

  getMatieres() {
    return this.coursList.map(cours => cours.matiere);
  }

  getMethodesByMatiere(matiere: string) {
    return this.coursList.find(cours => cours.matiere === matiere)?.methodes || [];
  }

  getMethodeById(matiere: string, id: number): Methode | undefined {
    const cours = this.coursList.find(c => c.matiere === matiere);
    return cours?.methodes.find(m => m.id === id);
  }
}




/*

        {
          id: 1,
          titre: "Introduction au concepte d'addition",
          introduction: "Apprenez à additionner efficacement des nombres.",
          contenu: "Le principe d'addition est fondamental en mathématique mais aussi dans la vie de tous les jours. \n \n Pour additionner, vous pouvez vous servir de vos doigts comme aide : \n prenez 2 doigts, lorsqu'on dit '+ 1' vous ouvrez un nouveau doigt, et avez maintenant 3 doigts. C'est le concept de l'addition ! Vous ajoutez des elements les uns, apres les autres.",
          exemples: ["Voici un petit exemple : 2 + 1 = 2 doigts ouvert + 1 nouveau doigt ouvert = 3 doigts ouvert sur votre main", "Voici un deuxieme exemple plus avancé : 99 + 10 = 109. Pour vous aider, vous pouvez avoir recours à une decomposition comme cela : \n 10 = 9 + 1 donc 99 + 10 = 99 + 1 + 9 = 100 + 9 = 109 !! Facil non ? "],
          conclusion: "L'addition permet d'ajouter un nombre à un autre. Dans le doute rappelez vous ce qu'il se passe lorsque vous avez 2 bonbons et decider d'en acheter 1 de plus : vous en avez maintenant 3 :-)"
        }

        */





/*

{
  id: 2,
  titre: 'La Révolution Française - Première partie ',
  introduction: "Contexte et causes de la Révolution Française.",
  contenu: "En 1789, le peuple français se soulève contre l'Ancien Régime suite à de nomnreux manque de réspect de la part de la monarchie. \n Effectivement, le peuple avait faim, et la royauté ne faisait rien, aussi en 1789 le debuta ce que l'on appel 'La Revolution Française' jusqu'en 1799. En 1789 a lieu la prise de la Bastille, qui symbolise la prise des armes par le peuple. En 1793 debute la terreur, qui est peut être defini comme 'État d'exception, caractérisé par un gouvernement révolutionnaire. ",
  //exemples: 
  conclusion: "La Révolution a mis fin à la monarchie absolue et ouvert une nouvelle ère que nous verrons plus tard. A savoir aujourd'hui : \n 1789 debut de la revolution,et prise de la bastille la même année. \n 1793 debut de la terreur qui est definie comme  un état d'exception, caractérisé par un gouvernement révolutionnaire. \n Fin de la révolution française en 1799."
}


*/