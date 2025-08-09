using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyJwtbymyselv.Data;
using MyJwtbymyselv.Models.NewsModel;

namespace MyJwtbymyselv.Controllers.UserControllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NewsController : ControllerBase
    {
        private readonly AuthenticationDbContext _context;

        public NewsController(AuthenticationDbContext context)
        {
            _context = context;
        }

        [HttpPost("news-submit")]
        public async Task<IActionResult> SubmitNews([FromBody] News news)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState); // Возвращает ошибки валидации
            }

            await _context.News.AddAsync(news);
            await _context.SaveChangesAsync();

            return Ok("Successful");
        }
    }

}
