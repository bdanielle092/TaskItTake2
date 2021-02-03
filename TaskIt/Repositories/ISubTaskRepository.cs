using System.Collections.Generic;
using TaskIt.Models;

namespace TaskIt.Repositories
{
    public interface ISubTaskRepository
    {

      
        public List<SubTask> GetById(int taskId);

        SubTask GetSubTaskById(int id);
        public void Delete(int id);
    }
}