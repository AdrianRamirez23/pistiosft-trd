using Microsoft.AspNetCore.Mvc;

namespace PistiosftTRD.Controllers
{
    [ApiController]
    [Route("api/consent")]
    public class ConsentController : ControllerBase
    {
        private static bool consentGranted = false;

        [HttpPost("grant")]
        public IActionResult Grant()
        {
            consentGranted = true;
            return Ok(new { message = "Consentimiento otorgado", status = consentGranted });
        }

        [HttpPost("revoke")]
        public IActionResult Revoke()
        {
            consentGranted = false;
            return Ok(new { message = "Consentimiento revocado", status = consentGranted });
        }

        [HttpGet("status")]
        public IActionResult Status()
        {
            return Ok(new { consent = consentGranted });
        }
    }
}