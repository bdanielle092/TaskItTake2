using System.Collections.Generic;
using TaskIt.Models;

namespace TaskIt.Repositories
{
    public interface ISubTaskRepository
    {

      
        public List<SubTask> GetByTaskId(int taskId);

        SubTask GetById(int id);
        public void Delete(int id);
    }
}