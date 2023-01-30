using backEnd_API.Models;
using Microsoft.EntityFrameworkCore;

namespace backEnd_API.Data
{
    public class ApiDbContext : DbContext
    {
        public ApiDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Employee> Employees { get; set; }
        public DbSet<Users> Users { get; set; }
    }
}
