import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/flashcard", async (req, res) => {
  const { topic } = req.body;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Explain briefly in 2-5 lines about: ${topic}`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (response.ok && data.candidates?.length) {
      const reply = data.candidates[0].content.parts[0].text;
      res.json({ success: true, result: reply });
    } else {
      res.status(500).json({ success: false, message: "Failed to get flashcard data", data });
    }
  } catch (err) {
    console.error("Gemini API Error:", err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
