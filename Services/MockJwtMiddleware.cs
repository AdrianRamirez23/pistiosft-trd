namespace PistiosftTRD.Services;

public class MockJwtMiddleware
{
    private readonly RequestDelegate _next;

    public MockJwtMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task Invoke(HttpContext context)
    {
        var token = context.Request.Headers.Authorization.ToString().Replace("Bearer ", "");

        if (!string.IsNullOrEmpty(token) && token == "MOCKED_JWT_TOKEN")
        {
            await _next(context);
            return;
        }

        if (!context.Request.Path.StartsWithSegments("/api/auth"))
        {
            context.Response.StatusCode = 401;
            await context.Response.WriteAsync("Token inválido o ausente.");
            return;
        }

        await _next(context);
    }
}