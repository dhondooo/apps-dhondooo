export async function onRequestPost({ request, env }) {
  try {
    const { pin } = await request.json();
    const serverPin = env.ACCESS_PIN || "2026";

    if (!pin || String(pin).trim() !== String(serverPin).trim()) {
      return new Response(JSON.stringify({ success: false, message: "Invalid access PIN" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Return token/auth state
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, message: "Bad request" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
}
