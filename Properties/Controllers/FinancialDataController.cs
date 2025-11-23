using Microsoft.AspNetCore.Mvc;

namespace PistiosftTRD.Controllers
{
    [ApiController]
    [Route("api/data")]
    public class FinancialDataController : ControllerBase
    {
        [HttpGet("transactions")]
        public IActionResult GetMockTransactions()
        {
            return Ok(new
            {
                companyId = 1,
                companyName = "Empresa Demo S.A.S",
                transactions = new[]
                {
                    new { id = 1, date = "2025-01-10", amount = 580000, type = "Ingreso" },
                    new { id = 2, date = "2025-01-12", amount = -200000, type = "Egreso" },
                    new { id = 3, date = "2025-01-15", amount = 750000, type = "Ingreso" }
                }
            });
        }
    }
}