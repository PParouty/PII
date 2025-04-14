using System.Text.Json;
using backend.Models;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;

namespace backend.Data
{
    public static class SeedData
    {
        public static void Initialize(DataContext context)
        {
            //ImportCours(context, "cours_seed_404.json");
            //  ImportExercices(context, "exercices_seed_francais.json");
            //ImportExercices(context, "exercices_seed_ArtsPlastiques.json");
            //   ImportExercices(context, "exercices_seed_physique_chimie.json");
            //ImportExercices(context, "exercices_seed_musique.json");
            //ImportExercices(context, "exercices_seed_svt.json");
        }

        // gesiton Cours 
        private static void ImportCours(DataContext context, string fileName)
        {
            var path = Path.Combine("Data", "DataSeeds", fileName);

            if (!File.Exists(path))
            {
                Console.WriteLine($" Fichier introuvable : {path}");
                return;
            }

            var json = File.ReadAllText(path);
            var coursList = JsonSerializer.Deserialize<List<Cours>>(json, new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });

            if (coursList == null)
            {
                Console.WriteLine(" null detecté.");
                return;
            }

            foreach (var cours in coursList)
            {
                var existingCours = context.Cours
                    .Include(c => c.Methodes)
                    .FirstOrDefault(c => c.Matiere == cours.Matiere);

                if (existingCours == null)
                {
                    context.Cours.Add(cours);
                }
                else
                {
                    foreach (var methode in cours.Methodes)
                    {
                        if (!existingCours.Methodes.Any(m => m.Titre == methode.Titre))
                        {
                            existingCours.Methodes.Add(methode);
                        }
                    }
                }
            }

            context.SaveChanges();

        }

        // gesiton Exercices 
        private static void ImportExercices(DataContext context, string fileName)
        {
            var path = Path.Combine("Data", "DataSeeds", fileName);

            if (!File.Exists(path))
            {
                Console.WriteLine($" Fichier introuvable : {path}");
                return;
            }

            var json = File.ReadAllText(path);
            var exercices = JsonSerializer.Deserialize<List<Exercice>>(json, new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true,
                Converters = { new JsonStringEnumConverter() }

            });

            if (exercices == null)
            {
                Console.WriteLine(" null detecté.");
                return;
            }

            foreach (var exercice in exercices)
            {
                var exists = context.Exercices
                    .Include(e => e.QCM)
                    .Any(e =>
                        e.Titre == exercice.Titre &&
                        e.Matiere == exercice.Matiere &&
                        e.Description == exercice.Description
                    );

                if (!exists)
                {
                    context.Exercices.Add(exercice);
                }
            }

            context.SaveChanges();

        }
    }
}
