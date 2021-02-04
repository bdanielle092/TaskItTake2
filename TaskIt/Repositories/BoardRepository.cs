using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using TaskIt.Data;
using TaskIt.Models;

namespace TaskIt.Repositories
{
    public class BoardRepository : IBoardRepository
    {
        private readonly ApplicationDbContext _context;

        public BoardRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<Board> GetAll()
        {
            return _context.Board
                .Include(b => b.UserProfile)
                .Where(b => b.Active)
                .ToList();
        }

        public Board GetById(int id)
        {
            return _context.Board
                .Include(b => b.UserProfile)
                .Where(b => b.Active)
                .FirstOrDefault(b => b.Id == id);
        }

        public List<Board> GetByUserProfileId(int id)
        {
            return _context.Board.Include(b => b.UserProfile)
                            .Where(b => b.UserProfileId == id)
                            .Where(b => b.Active)
                            .ToList();
        }
        public void Add(Board board)
        {
            board.Active = true;
            _context.Add(board);
            _context.SaveChanges();
        }


        public void Update(Board board)
        {
            board.Active = true;
            _context.Entry(board).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var board = GetById(id);
            board.Active = false;
            _context.Entry(board).State = EntityState.Modified;
            _context.SaveChanges();
        }


    }
}
