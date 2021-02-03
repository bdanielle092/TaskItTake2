using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TaskIt.Models;
using TaskIt.Repositories;

namespace TaskIt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class TaskController : ControllerBase
    {
        private readonly ITaskRepository _taskRepo;
        public TaskController(ITaskRepository taskRepo)
        {
            _taskRepo = taskRepo;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_taskRepo.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var task = _taskRepo.GetById(id);
            if (task == null)
            {
                return NotFound();
            }
            return Ok(task);
        }

        [HttpPost]
        public IActionResult Post(Task task)
        {
            _taskRepo.Add(task);
            return CreatedAtAction("Get", new { id = task.Id }, task);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Task task)
        {
            if (id != task.Id)
            {
                return BadRequest();
            }

            _taskRepo.Update(task);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _taskRepo.Delete(id);
            return NoContent();
        }

        [HttpPost("addSubTask")]
        public IActionResult Post(SubTask subTask)
        {
            _taskRepo.Add(subTask);
            return CreatedAtAction("Get", new { id = subTask.Id }, subTask);
        }

    }
}
