using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using TaskIt.Data;
using TaskIt.Models;

namespace TaskIt.Repositories
{
    public class SubTaskRepository : ISubTaskRepository
    {
        private readonly ApplicationDbContext _context;

        public SubTaskRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<SubTask> GetAll()
        {
            return _context.SubTask
                .Include(st => st.Task)
                .ToList();
        }

        public SubTask GetById(int id)
        {
            return _context.SubTask
                .Include(st => st.Task)
                .FirstOrDefault(st => st.Id == id);
        }

        public List<SubTask> GetByTaskId(int id)
        {
            return _context.SubTask
                            .Include(st => st.Task)
                            .Where(st => st.TaskId == id)
                            .ToList();
        }

        public void Add(SubTask subTask)
        {
            _context.Add(subTask);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var subTask = GetById(id);
            _context.SubTask.Remove(subTask);
            _context.SaveChanges();
        }

    }
}
