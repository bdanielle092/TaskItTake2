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


        //[HttpGet]
        //public IActionResult Get()
        //{
        //    return Ok(_subTaskRepo.GetAll());
        //}

        [HttpGet("{taskid}")]
        public IActionResult GetById(int taskId)
        {
            var subTasks = _subTaskRepo.GetById(taskId);
            if (subTasks == null)
            {
                return NotFound();
            }
            return Ok(subTasks);
        }



        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _subTaskRepo.Delete(id);
            return NoContent();
        }
    }
}
