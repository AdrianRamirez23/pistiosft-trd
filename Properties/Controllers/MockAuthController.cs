using Microsoft.AspNetCore.Mvc;

namespace PistiosftTRD.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class MockAuthController : ControllerBase
    {
        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            if (request.Username == "admin" && request.Password == "123")
            {
                return Ok(new
                {
                    token = "MOCKED_JWT_TOKEN",
                    expiresIn = 3600,
                    user = "admin"
                });
            }

            return Unauthorized(new { message = "Credenciales inválidas" });
        }
    }

    public class LoginRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}