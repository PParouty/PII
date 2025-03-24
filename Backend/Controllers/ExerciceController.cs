using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ExerciceController : ControllerBase
    {
        private readonly DataContext _context;

        public ExerciceController(DataContext context)  // le context
        {
            _context = context;
        }


        /// /////////// Definition des CRUDs :

        // GET: api/exercice
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Exercice>>> GetExercices()
        {
            var exercices = await _context.Exercices
                .Include(e => e.QCM) // Inclure les QCM liés
                .ToListAsync();
            return Ok(exercices);
        }

        // GET: api/exercice/3
        [HttpGet("{id}")]
        public async Task<ActionResult<Exercice>> GetExercice(int id)
        {
            var exercice = await _context.Exercices
                .Include(e => e.QCM)
                .FirstOrDefaultAsync(e => e.Id == id);

            if (exercice == null)
                return NotFound();

            return Ok(exercice);
        }



        // GET : api/matiere/"nom"
        [HttpGet("matiere/{matiere}")]
        public async Task<ActionResult<IEnumerable<Exercice>>> GetExercicesParMatiere(string matiere)
        {
            var exercices = await _context.Exercices
                .Where(e => e.Matiere.ToLower() == matiere.ToLower())
                .Include(e => e.QCM)
                .ToListAsync();

            return Ok(exercices);
        }


        // GET : api/matiere/"type" (comme QCM par ex)
        [HttpGet("matiere/{matiere}/type/{type}")]
        public async Task<ActionResult<IEnumerable<Exercice>>> GetExercicesParMatiereEtType(string matiere, string type)
        {
            if (!Enum.TryParse<TypeExercice>(type, true, out var parsedType))
                return BadRequest("Type invalide");

            var exercices = await _context.Exercices
                .Where(e => e.Matiere.ToLower() == matiere.ToLower() && e.Type == parsedType)
                .Include(e => e.QCM)
                .ToListAsync();

            return Ok(exercices);
        }






    }//class


}// namespace