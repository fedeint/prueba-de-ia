export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { prompt, apiKey } = req.body;

    // Validate required fields
    if (!prompt || !apiKey) {
      return res.status(400).json({ 
        error: "Missing required fields: prompt and apiKey" 
      });
    }

    // Make request to Google Gemini API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json({
        error: "Google API error",
        details: errorData
      });
    }

    const data = await response.json();
    res.status(200).json(data);

  } catch (error) {
    console.error("Proxy error:", error);
    res.status(500).json({ 
      error: "Internal server error",
      message: error.message 
    });
  }
}
