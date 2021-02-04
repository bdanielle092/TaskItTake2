using TaskIt.Models;

namespace TaskIt.Repositories
{
    public interface IPriorityRepository
    {
        Priority GetById(int id);
    }
}