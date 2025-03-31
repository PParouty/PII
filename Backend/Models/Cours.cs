
// le models d'un cours : comme pour le front il y a un ID d'identification, une matiere puis differente methodes.
// chaque methode aura un titre, un contenu une description etc
// ex cours de 6eme, matiere maths, methode addition




namespace backend.Models
{
    public class Cours
    {
        public int Id { get; set; }
        public string Matiere { get; set; } = string.Empty;

        //La liste des methodes
        public List<Methode> Methodes { get; set; } = new();
    }
}