using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using TaskIt.Models;
using TaskIt.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using TaskIt.Data;


namespace TaskIt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class BoardController : ControllerBase
    {
        private readonly IBoardRepository _boardRepo;
        private readonly IUserProfileRepository _userProfileRepo;
        public BoardController( IBoardRepository boardRepo, IUserProfileRepository userProfileRepo)
        {
            _boardRepo = boardRepo;
            _userProfileRepo = userProfileRepo;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var currentUser = GetCurrentUserProfile();
            var currentUserBoards = _boardRepo.GetByUserProfileId(currentUser.Id);
            return Ok(currentUserBoards);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var board  = _boardRepo.GetById(id);
            if (board == null)
            {
                return NotFound();
            }
            return Ok(board);
        }

        //[HttpGet("getbyuser/{id}")]
        //public IActionResult GetByUser(int id)
        //{
        //    return Ok(_boardRepo.GetByUserProfileId(id));
        //}

        [HttpPost]
        public IActionResult Post(Board board)
        {
            var currentUser = GetCurrentUserProfile();
            board.UserProfileId = currentUser.Id;
            _boardRepo.Add(board);
            return CreatedAtAction("Get", new { id = board.Id }, board);
        }


        [HttpPut("{id}")]
        public IActionResult Put(int id, Board board  )
        {
            
            if (id != board.Id)
            {
                return BadRequest();
            }
    
            _boardRepo.Update(board);
            return NoContent();
        }

       
        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userProfileRepo.GetByFirebaseUserId(firebaseUserId);
        }
    }
}
