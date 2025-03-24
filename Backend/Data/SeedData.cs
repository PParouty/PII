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
        }
    }
}