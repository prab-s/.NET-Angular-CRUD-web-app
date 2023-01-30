using backEnd_API.Data;
using backEnd_API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backEnd_API.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class EmployeesController : Controller
    {
        private readonly ApiDbContext _apiDbContext;

        public EmployeesController(ApiDbContext apiDbContext)
        {
            _apiDbContext = apiDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllEmployees()
        {
            var employees = await _apiDbContext.Employees.ToListAsync();
            return Ok(employees);
        }

        [HttpGet("{id:Guid}")]
        public async Task<IActionResult> GetAnEmployee(Guid id)
        {
            var employee = await _apiDbContext.Employees.FindAsync(id);
            if (employee == null) return BadRequest("Employee not found");
            return Ok(employee);
        }

        [HttpPost]
        public async Task<IActionResult> AddAnEmployee([FromBody] Employee employeeRequest)
        {
            employeeRequest.Id = Guid.NewGuid();
            await _apiDbContext.Employees.AddAsync(employeeRequest);
            await _apiDbContext.SaveChangesAsync();
            return Ok(employeeRequest);
        }


        [HttpPut]
        public async Task<IActionResult> UpdateAnEmployee([FromBody] Employee employeeRequest)
        {
            var employee = await _apiDbContext.Employees.FindAsync(employeeRequest.Id);
            if (employee == null) return BadRequest("Can't put employee details");

            employee.Id = employeeRequest.Id;
            employee.Firstname = employeeRequest.Firstname;
            employee.Surname = employeeRequest.Surname;
            employee.DOB = employeeRequest.DOB;
            employee.Gender = employeeRequest.Gender;
            employee.Role = employeeRequest.Role;
            employee.Email = employeeRequest.Email;
            employee.Phone = employeeRequest.Phone;
            employee.Department = employeeRequest.Department;
            employee.Salary = employeeRequest.Salary;

            await _apiDbContext.SaveChangesAsync();

            return Ok(await _apiDbContext.Employees.FindAsync(employeeRequest.Id));
        }

        [HttpDelete("{id:Guid}")]
        public async Task<IActionResult> DeleteAnEmployee(Guid id)
        {
            var employee = await _apiDbContext.Employees.FindAsync(id);
            if (employee == null) return BadRequest("Employee not found");

            _apiDbContext.Employees.Remove(employee);
            await _apiDbContext.SaveChangesAsync();

            return Ok(employee);
        }
    }
}
