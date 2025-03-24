
// ici on defini l'exerice de type qcm

namespace backend.Models
{
    public class QCM
    {
        public int Id { get; set; }  //  clé primaire pour identifier chaque exo individuellement
        public string Question { get; set; } = string.Empty;
        public List<string> Options { get; set; } = new List<string>();
        public string Correction { get; set; } = string.Empty;

        // Pour la BDD il va nous falloir une clef etrangere : 
        public int ExerciceId { get; set; } // ici clef etrangere pour que ça puisse etre referencé depuis la table des exercices
        public Exercice? Exercice { get; set; } // va aider pour la navigation j'espere sinon ça restera inutilisé
        // 
        //  (actuelement à cette etape cest compliqué il y a beaucoup d'essai-erreur)
    }
}