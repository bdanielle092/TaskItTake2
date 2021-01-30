using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaskIt.Data;
using TaskIt.Models;
using TaskIt.Repositories;

namespace TaskIt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BoardController : ControllerBase
    {
        private readonly BoardRepository _boardRepository;
        public BoardController(ApplicationDbContext context)
        {
            _boardRepository = new BoardRepository(context);
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_boardRepository.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var board  = _boardRepository.GetById(id);
            if (board == null)
            {
                return NotFound();
            }
            return Ok(board);
        }

        [HttpGet("getbyuser/{id}")]
        public IActionResult GetByUser(int id)
        {
            return Ok(_boardRepository.GetByUserProfileId(id));
        }

        public IActionResult Post(Board board)
        {
            _boardRepository.Add(board);
            return CreatedAtAction("Get", new { id = board.Id }, board);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Board board  )
        {
            if (id != board.Id)
            {
                return BadRequest();
            }

            _boardRepository.Update(board);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _boardRepository.Delete(id);
            return NoContent();
        }
    }
}
