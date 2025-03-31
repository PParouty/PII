using backend.Models;

namespace backend.Data
{
    public static class SeedData
    {
        public static void Initialize(DataContext context)
        {
            if (!context.Exercices.Any())
            {
                var exo1 = new Exercice
                {
                    Matiere = "Maths",
                    Titre = "Addition pour 6e",
                    Description = "Calculez : 12 + 8, 727 + 1298, 191827 + 12901869",
                    Niveau = Niveau.Facile,
                    Type = TypeExercice.Calculs,
                    Correction = "Les réponses sont 20 ; 2025 ; 13093696"
                };

                var exo2 = new Exercice
                {
                    Matiere = "Histoire",
                    Titre = "La Révolution Française",
                    Description = "Donnez la date de la prochaine révolution française.",
                    Niveau = Niveau.Facile,
                    Type = TypeExercice.Texte,
                    Correction = "2025 on espère"
                };

                var exo3 = new Exercice
                {
                    Matiere = "Histoire",
                    Titre = "QCM : La Révolution Française",
                    Description = "Répondez aux questions suivantes sur la Révolution Française.",
                    Niveau = Niveau.Facile,
                    Type = TypeExercice.QCM
                };

                context.Exercices.AddRange(exo1, exo2, exo3);
                context.SaveChanges();

                // On va ajouter les types QCM maintenant 

                var qcms = new List<QCM>
                {
                    new QCM
                    {
                        ExerciceId = exo3.Id, // identification de l'exerice de type QCM -> cest le numero 3 ( rappel : les exo ont un enum de 3 types, dont un est QCM)
                        Question = "Quelle année marque le début de la Révolution française ?",
                        Options = new List<string> { "1776", "1789", "1815", "1848" },
                        Correction = "1789"
                    },
                    new QCM
                    {
                        ExerciceId = exo3.Id,
                        Question = "Quelle est l'année de la prise de la Bastille ?",
                        Options = new List<string> { "1790", "1798", "1789", "1767" },
                        Correction = "1789"
                    },
                    new QCM
                    {
                        ExerciceId = exo3.Id,
                        Question = "Qu'est-ce que la 'Terreur' ?",
                        Options = new List<string> {
                            "Une monarchie temporaire",
                            "Une période de doutes et de craintes en Allemagne",
                            "Le retour des guillotines en 1801",
                            "État d'exception, caractérisé par un gouvernement révolutionnaire"
                        },
                        Correction = "État d'exception, caractérisé par un gouvernement révolutionnaire"
                    }
                };

                context.QCMs.AddRange(qcms);
                context.SaveChanges();
            }

            if (!context.Cours.Any())
            {
                var coursMaths = new Cours
                {
                    Matiere = "Maths",
                    Methodes = new List<Methode>
        {
            new Methode
            {
                Titre = "Introduction au concept d'addition",
                Introduction = "Apprenez à additionner efficacement des nombres.",
                Contenu = "Le principe d'addition est fondamental en mathématique mais aussi dans la vie de tous les jours. \n \n Pour additionner, vous pouvez vous servir de vos doigts comme aide : \n prenez 2 doigts, lorsqu'on dit '+ 1' vous ouvrez un nouveau doigt, et avez maintenant 3 doigts. C'est le concept de l'addition ! Vous ajoutez des elements les uns, apres les autres.",
                Exemples = new List<string>
                {
                    "Voici un petit exemple : 2 + 1 = 2 doigts ouvert + 1 nouveau doigt ouvert = 3 doigts ouvert sur votre main",
                    "Voici un deuxieme exemple plus avancé : 99 + 10 = 109. Pour vous aider, vous pouvez avoir recours à une decomposition comme cela : \n 10 = 9 + 1 donc 99 + 10 = 99 + 1 + 9 = 100 + 9 = 109 !! Facil non ? "
                },
                Conclusion = "L'addition permet d'ajouter un nombre à un autre. Dans le doute rappelez vous ce qu'il se passe lorsque vous avez 2 bonbons et decider d'en acheter 1 de plus : vous en avez maintenant 3 :-)"
            }
        }

                };

                var coursHistoire = new Cours
                {
                    Matiere = "Histoire",
                    Methodes = new List<Methode>
        {
            new Methode
            {
                Titre = "La Révolution Française - Première partie",
                Introduction = "Contexte et causes de la Révolution Française.",
                Contenu = "En 1789, le peuple français se soulève contre l'Ancien Régime suite à de nomnreux manque de réspect de la part de la monarchie. \n Effectivement, le peuple avait faim, et la royauté ne faisait rien, aussi en 1789 le debuta ce que l'on appel 'La Revolution Française' jusqu'en 1799. En 1789 a lieu la prise de la Bastille, qui symbolise la prise des armes par le peuple. En 1793 debute la terreur, qui est peut être defini comme 'État d'exception, caractérisé par un gouvernement révolutionnaire. ",
                Conclusion = "La Révolution a mis fin à la monarchie absolue et ouvert une nouvelle ère que nous verrons plus tard. A savoir aujourd'hui : \n 1789 debut de la revolution,et prise de la bastille la même année. \n 1793 debut de la terreur qui est definie comme  un état d'exception, caractérisé par un gouvernement révolutionnaire. \n Fin de la révolution française en 1799."
            }
        }
                };

                context.Cours.AddRange(coursMaths, coursHistoire);
                context.SaveChanges();
            }
            Console.WriteLine($"Cours en base : {context.Cours.Count()}");
            Console.WriteLine($"Méthodes en base : {context.Methodes.Count()}");

        }
    }
}