using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace PistiosftTRD.Controllers
{
    [ApiController]
    [Route("api/logs")]
    public class LogController : ControllerBase
    {
        private static readonly List<string> logs = new();

        [HttpPost("add")]
        public IActionResult AddLog([FromBody] string message)
        {
            logs.Add($"{DateTime.Now}: {message}");
            return Ok(new { registered = true });
        }

        [HttpGet("all")]
        public IActionResult GetLogs()
        {
            return Ok(logs);
        }
    }
}