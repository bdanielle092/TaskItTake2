using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
                .ToList();
        }

        public Board GetById(int id)
        {
            return _context.Board
                .Include(b => b.UserProfile)
                .FirstOrDefault(b => b.Id == id);
        }

        public List<Board> GetByUserProfileId(int id)
        {
            return _context.Board.Include(b => b.UserProfile)
                            .Where(b => b.UserProfileId == id)
                            .ToList();
        }
        public void Add(Board board)
        {
            _context.Add(board);
            _context.SaveChanges();
        }


        public void Update(Board board)
        {
            _context.Entry(board).State = EntityState.Modified;
            _context.SaveChanges();
        }

     
    }
}
