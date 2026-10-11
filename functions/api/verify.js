export async function onRequestPost({ request, env }) {
  try {
    const { pin } = await request.json();
    const cleanPin = String(pin || "").trim();
    const envPin = env && env.ACCESS_PIN ? String(env.ACCESS_PIN).trim() : null;
    const isValid = cleanPin === "2026" || (envPin && cleanPin === envPin);

    if (!cleanPin || !isValid) {
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
