using System.Collections.Generic;
using System.Threading.Tasks;

namespace TaskIt.Repositories
{
    public interface ITaskRepository
    {
  
        List<Task> GetAll();
        Task GetById(int id);
        void Add(Task task);
        void Update(Task task);
        void Delete(int id);
    }
}