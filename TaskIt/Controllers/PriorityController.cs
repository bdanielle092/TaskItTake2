using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaskIt.Repositories;

namespace TaskIt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class PriorityController : ControllerBase
    {
        private readonly IPriorityRepository _priorityRepo;
 
        public PriorityController(IPriorityRepository priorityRepo)
        {
            _priorityRepo = priorityRepo;
       
        }


        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var priority = _priorityRepo.GetById(id);
            if (priority == null)
            {
                return NotFound();
            }
            return Ok(priority);
        }
    }
}
