//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Mvc;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using TaskIt.Repositories;

//namespace TaskIt.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    [Authorize]
//    public class TaskController : ControllerBase
//    {
//        private readonly ITaskRepository _taskRepo;
//        public TaskController(ITaskRepository taskRepo)
//        {
//            _taskRepo = taskRepo;
//        }

//        [HttpGet]
//        public IActionResult Get()
//        {
//            return Ok(_taskRepo.GetAll());
//        }

//        [HttpGet("{id}")]
//        public IActionResult Get(int id)
//        {
//            var post = _taskRepo.GetById(id);
//            if (post == null)
//            {
//                return NotFound();
//            }
//            return Ok(post);
//        }

       
//    }
//}
