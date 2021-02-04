using System.Collections.Generic;
using TaskIt.Models;

namespace TaskIt.Repositories
{
    public interface IBoardRepository
    {
        void Add(Board board);
        List<Board> GetAll();
        Board GetById(int id);
        List<Board> GetByUserProfileId(int id);
        void Update(Board board);
        public void Delete(int id);
    }
}