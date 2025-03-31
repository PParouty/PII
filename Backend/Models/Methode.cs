





namespace backend.Models
{
    public class Methode
    {
        public int Id { get; set; }
        public string Titre { get; set; } = string.Empty;
        public string Introduction { get; set; } = string.Empty;
        public string? Contenu { get; set; }  // Pas obligatoire car depend de la matiere
        public List<string>? Exemples { get; set; } = new(); // pareil, par ex en maths on a des exemples, en histoire pas trop trop 
        public string Conclusion { get; set; } = string.Empty;

        // Clef étrangere normalement qui envoi vers le cours en question
        public int CoursId { get; set; }
        public Cours? Cours { get; set; }
    }
}