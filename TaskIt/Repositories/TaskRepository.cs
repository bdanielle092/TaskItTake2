﻿using Microsoft.EntityFrameworkCore;
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

       

        public Task GetById(int id)
        {
            return _context.Task
                  .Include(t => t.Board)
                  .Include(t => t.Priority)
                  .Include(t => t.SubTask)
                  .Where(t => t.Active)
                .FirstOrDefault(task => task.Id == id);
        }

        public List<Task> GetByBoardId(int id)
        {
            return _context.Task
                            .Include(t => t.Board)
                            .Include(t => t.Priority)
                            .Include(t => t.SubTask)
                            .Where(t => t.BoardId == id)
                            .Where(t => t.Active)
                            .ToList();
        }


        public void Add(Task task)
        {
            task.Active = true;
             _context.Add(task);
             _context.SaveChanges();
        }

        public void Update(Task task)
        {
            task.Active = true;
            _context.Entry(task).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var task = GetById(id);
            task.Active = false;
            _context.Entry(task).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Add(SubTask subTask)
        {
            subTask.Active = true;
            _context.Add(subTask);
            _context.SaveChanges();
        }


        //public Notes GetNotesById(int id)
        //{
        //    return _context.Notes
        //        .FirstOrDefault(n => n.Id == id);
        //}

        //public void Add(Notes Notes)
        //{
        //    _context.Add(Notes);
        //    _context.SaveChanges();
        //}
        //public void Delete(int id)
        //{
        //    var notes = GetNoteById(id);
        //    notes.Active = false;
        //    _context.Entry(notes).State = EntityState.Modified;
        //    _context.SaveChanges();
        //}





    }
}
