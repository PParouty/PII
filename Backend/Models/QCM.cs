
// ici on defini l'exerice de type qcm

namespace backend.Models
{
    public class QCM
    {
        public string Question { get; set; } = string.Empty;
        public List<string> Options { get; set; } = new List<string>();
        public string Correction { get; set; } = string.Empty;
    }
}