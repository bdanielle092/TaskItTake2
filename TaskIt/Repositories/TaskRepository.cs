using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using TaskIt.Models;
using TaskIt.Data;

namespace TaskIt.Repositories
{
    public class TaskRepository : ITaskRepository
    {
        private readonly ApplicationDbContext _context;

        public TaskRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<Task> GetAll()
        {
            return _context.Task
                .Include(t => t.Board)
                .Include(t => t.Priority)
                .ToList();
        }

        public Task GetById(int id)
        {
            return _context.Task
                  .Include(t => t.Board)
                  .Include(t => t.Priority)
                .FirstOrDefault(task => task.Id == id);
        }

        public List<Task> GetByBoardId(int id)
        {
            return _context.Task
                            .Include(t => t.Board)
                            .Where(t => t.BoardId == id)
                            .ToList();
        }


        public void Add(Task task)
        {
            _context.Add(task);
            _context.SaveChanges();
        }

        public void Update(Task task)
        {
            _context.Entry(task).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var task = GetById(id);
            _context.Task.Remove(task);
            _context.SaveChanges();
        }
    }
}
