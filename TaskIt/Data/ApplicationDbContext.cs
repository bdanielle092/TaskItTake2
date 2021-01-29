using TaskIt.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace TaskIt.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Board> Board { get; set; }
        public DbSet<Priority> Priority { get; set; }
        public DbSet<SubTask> SubTask { get; set; }
        public DbSet<Models.Task> Task { get; set; }
        public DbSet<UserProfile> UserProfile { get; set; }

        

    }
}
