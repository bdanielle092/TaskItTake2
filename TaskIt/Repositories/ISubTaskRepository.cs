using System.Collections.Generic;
using TaskIt.Models;

namespace TaskIt.Repositories
{
    public interface ISubTaskRepository
    {
        void Add(SubTask subTask);
        List<SubTask> GetAll();
        SubTask GetById(int id);
        List<SubTask> GetByTaskId(int id);
        void Delete(int id);
    }
}