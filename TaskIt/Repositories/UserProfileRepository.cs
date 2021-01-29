using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaskIt.Data;
using TaskIt.Models;

namespace TaskIt.Repositories
{
    public class UserProfileRepository : IUserProfileRepository
    {
        private readonly ApplicationDbContext _context;

        public UserProfileRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public UserProfile GetByFireBaseUserId(string firebaseUserId)
        {
            return _context.UserProfile
                .FirstOrDefault(up => up.FirebaseUserId == firebaseUserId);
        }

        public List<UserProfile> GetAll()
        {
            return _context.UserProfile.ToList();
        }

        public UserProfile GetById(int id)
        {
            return _context.UserProfile.FirstOrDefault(UserProfile => UserProfile.Id == id);
        }

        public void Add(UserProfile userProfile)
        {
            _context.Add(userProfile);
            _context.SaveChanges();
        }

        public void Update(UserProfile userProfile)
        {
            _context.Entry(userProfile).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var userProfile = GetById(id);
            _context.UserProfile.Remove(userProfile);
            _context.SaveChanges();
        }
    }
}
