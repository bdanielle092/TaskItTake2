//using Microsoft.EntityFrameworkCore;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using TaskIt.Data;

//namespace TaskIt.Repositories
//{
//    public class TaskRepository : ITaskRepository
//    {
//        private readonly ApplicationDbContext _context;

//        public TaskRepository(ApplicationDbContext context)
//        {
//            _context = context;
//        }

//        public List<Task> GetAll()
//        {
//            return _context.Task.ToList();
//        }

//        public Task GetById(int id)
//        {
//            return _context.Task.
//                FirstOrDefault(task => task.Id == id);
//        }


//        public void add(Task task)
//        {
//            _context.Add(task);
//            _context.SaveChanges();
//        }

//        public void update(Task task)
//        {
//            _context.Entry(task).State = EntityState.Modified;
//            _context.SaveChanges();
//        }

//        public void delete(int id)
//        {
//            var task = GetById(id);
//            _context.Task.Remove(task);
//            _context.SaveChanges();
//        }
//    }
//}
