using System.Collections.Generic;
using TaskIt.Models;

namespace TaskIt.Repositories
{
    public interface IBoardRepository
    {
        void Add(Board board);
        void Delete(int id);
        List<Board> GetAll();
        Board GetById(int id);
        List<Board> GetByUserProfileId(int id);
        void Update(Board board);
    }
}