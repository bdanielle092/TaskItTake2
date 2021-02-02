using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaskIt.Models;
using TaskIt.Repositories;

namespace TaskIt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class SubTaskController : ControllerBase
    {
        private readonly ISubTaskRepository _subTaskRepo;
        public SubTaskController(ISubTaskRepository subTaskRepo)
        {
            _subTaskRepo = subTaskRepo;
        }


        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_subTaskRepo.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var subTask = _subTaskRepo.GetById(id);
            if (subTask == null)
            {
                return NotFound();
            }
            return Ok(subTask);
        }

        [HttpPost]
        public IActionResult Post(SubTask subTask)
        {
            _subTaskRepo.Add(subTask);
            return CreatedAtAction("Get", new { id = subTask.Id }, subTask);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _subTaskRepo.Delete(id);
            return NoContent();
        }
    }
}
