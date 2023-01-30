using backEnd_API.Data;
using backEnd_API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backEnd_API.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class UserController : Controller
    {
        private readonly ApiDbContext _apiDbContext;

        public UserController(ApiDbContext apiDbContext)
        {
            _apiDbContext = apiDbContext;
        }

        [HttpPost("/api/[controller]/addUser")]
        public async Task<IActionResult> AddNewUser([FromBody] Users userRequest)
        {
            try
            {
                if (!string.IsNullOrEmpty(userRequest.email) && !string.IsNullOrEmpty(userRequest.password))
                {
                    userRequest.id = Guid.NewGuid();
                    await _apiDbContext.Users.AddAsync(userRequest);
                    await _apiDbContext.SaveChangesAsync();
                    return StatusCode(StatusCodes.Status202Accepted, "New user sucessfully added");
                }
                else
                {
                    return StatusCode(StatusCodes.Status400BadRequest, "Both email and password need to not be null or empty");
                }
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Internal server error");
            }

        }

        [HttpPost]
        public async Task<ActionResult<Users>> CheckUser([FromBody] Users userRequest)
        {
            IQueryable<Users> query = _apiDbContext.Users;

            if (!string.IsNullOrEmpty(userRequest.email) && !string.IsNullOrEmpty(userRequest.password))
            {
                query = query.Where(q => q.email == userRequest.email && q.password == userRequest.password);
            }
            else
            {
                return StatusCode(StatusCodes.Status400BadRequest, "Both email and password need to not be null or empty");
            }

            List<Users> theResponse = await query.ToListAsync();
            if (theResponse.Count > 0)
            {
                return StatusCode(StatusCodes.Status200OK, "Sucessfully authorised");
            }
            else
            {
                return StatusCode(StatusCodes.Status401Unauthorized, "Not authorised by credentials");
            }
        }
    }
}
