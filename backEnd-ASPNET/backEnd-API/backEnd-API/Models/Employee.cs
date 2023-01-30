namespace backEnd_API.Models
{
    public class Employee
    {
        public Guid Id { get; set; }
        public string Firstname { get; set; }
        public string Surname { get; set; }
        public DateTime DOB { get; set; }
        public string Gender { get; set; }
        public string Role { get; set; }
        public string Email { get; set; }
        public long Phone { get; set; }
        public string Department { get; set; }
        public long Salary { get; set; }
    }
}
