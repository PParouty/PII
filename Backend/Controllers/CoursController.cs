
/*
// CE QU ON VEUT :

- afficher la liste des cours different (par matiere) -> donc faudra recuperer la liste des cours
- etre capable de selectionner une matiere specifique -> donc etre capable d'afficher une / les matiere d'un seul cours
- etre capable de recuperer une methode specifique dans une matiere -> donc recuperer l'id d'une methode individuellement



*/

using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CoursController : ControllerBase
    {
        private readonly DataContext _context;

        public CoursController(DataContext context)
        {
            _context = context;
        }

        // GET: api/cours -> la lsite des cours
        [HttpGet]
        public async Task<ActionResult<IEnumerable<string>>> GetMatieres()
        {
            var matieres = await _context.Cours
                .Select(c => c.Matiere)
                .Distinct()
                .ToListAsync();

            return Ok(matieres);
        }

        // GET: api/cours/{matiere} -> tous les cours pour une matiere donné
        [HttpGet("{matiere}")]
        public async Task<ActionResult<IEnumerable<Methode>>> GetMethodesByMatiere(string matiere)
        {
            var cours = await _context.Cours
                .Include(c => c.Methodes)
                .FirstOrDefaultAsync(c => c.Matiere.ToLower() == matiere.ToLower());

            if (cours == null)
                return NotFound();

            return Ok(cours.Methodes);
        }

        // GET: api/cours/{matiere}/methode/{id} -> une methode specifique pour la matiere choisite
        [HttpGet("{matiere}/methode/{id}")]
        public async Task<ActionResult<Methode>> GetMethodeById(string matiere, int id)
        {
            var cours = await _context.Cours
                .Include(c => c.Methodes)
                .FirstOrDefaultAsync(c => c.Matiere.ToLower() == matiere.ToLower());

            if (cours == null)
                return NotFound("Cours introuvable.");

            var methode = cours.Methodes.FirstOrDefault(m => m.Id == id);

            if (methode == null)
                return NotFound("Méthode introuvable.");

            return Ok(methode);
        }
    }
}