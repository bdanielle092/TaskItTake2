using System;
using System.Collections.Generic;
using System.Linq;
using TaskIt.Data;

namespace TaskIt.Repositories
{
    public class NotesRepository
    {
        private readonly ApplicationDbContext _context;

        public NotesRepository(ApplicationDbContext context)
        {
            _context = context;
        }

    } 
}
