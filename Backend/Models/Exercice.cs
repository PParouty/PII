// Ici le model exerice 

// on va redefinir le model en se basant sur la definition qu'on a donné en front-end
// donc 2 type d'exo :
/*
- les questions ouverte / calcule / text
- les QCM

Par soucis de visibilité on va separer QCM.cs et Exercice.cs en 2 class differentes
On va aussi definir les enums ailleur pour garder une clareté dans nos class et possiblement réutiliser plus tard si beosin

*/
namespace backend.Models
{
    public class Exercice
    {
        public int Id { get; set; }
        public string Matiere { get; set; } = string.Empty;
        public string Titre { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public Niveau Niveau { get; set; } // un enum ici
        public TypeExercice Type { get; set; } // l'auter enum
        public string? Correction { get; set; } // comme dans le front, les qcm n'ont pas une partie correction mais une correction integré directement dans l'objet qcm
        public List<QCM>? QCM { get; set; } // Nullable vu que l'exo peut ne pas etre un QCM 
    }
}