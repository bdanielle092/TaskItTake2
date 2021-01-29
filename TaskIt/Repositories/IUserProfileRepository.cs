using System.Collections.Generic;
using TaskIt.Models;

namespace TaskIt.Repositories
{
    public interface IUserProfileRepository
    {
        void Add(UserProfile userProfile);
        void Delete(int id);
        List<UserProfile> GetAll();
        UserProfile GetByFireBaseUserId(string firebaseUserId);
        UserProfile GetById(int id);
        void Update(UserProfile userProfile);
    }
}