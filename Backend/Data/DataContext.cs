using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data
{
    public class DataContext : DbContext
    {


        // ON VA AVANCER PAR ETAPE ET SE CONCENTRER QUE SUR LES EXOS POUR LE MOMENT

        /*

        Les cours et methodes on verra plus tard àa sera pour une 2eme migration

        */




        public DataContext(DbContextOptions<DataContext> options)
            : base(options) { }

        // Les Tables (exo et qcm)
        public DbSet<Exercice> Exercices { get; set; }
        public DbSet<QCM> QCMs { get; set; }


        // public DbSet<Cours> Cours { get; set; } // pour plus tard finalement
        // public DbSet<Methode> Methodes { get; set; } // pour plus tard finalement 

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // truc internet à verifier
            modelBuilder.Entity<QCM>()
                .Property(q => q.Options)
                .HasConversion(
                    v => string.Join("|||", v),               // a verifier
                    v => v.Split("|||", StringSplitOptions.None).ToList() // a verifier (trouvé sur internet)
                );

            // Relation entre Exercice et QCM : 1-n normalement mais la c'est theorique
            modelBuilder.Entity<Exercice>()
                .HasMany(e => e.QCM)
                .WithOne(q => q.Exercice!)
                .HasForeignKey(q => q.ExerciceId) // -> on a bien definie de clef etranger dans QCM.cs 
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}