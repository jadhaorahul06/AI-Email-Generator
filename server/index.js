const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// ✅ Route to generate email using Groq AI
app.post('/generate-email', async (req, res) => {
  const { prompt } = req.body;
  console.log("🟢 Received prompt:", prompt);

  try {
    const response = await axios.post(
  'https://api.groq.com/openai/v1/chat/completions',
  {
    model: "llama3-70b-8192",
    messages: [{ role: "user", content: prompt }]
  },
  {
    headers: {
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      'Content-Type': 'application/json'
    },
    timeout: 10000 // ⏱️ 10 seconds timeout
  }
);

    

    const content = response.data.choices[0].message.content;
    console.log("🟢 Received prompt:", prompt);
    res.json({ email: content });
  } catch (err) {
    console.error("❌ AI Generation Error:");
    if (err.response) {
      console.error("Status:", err.response.status);
      console.error("Data:", err.response.data);
    } else {
      console.error(err.message);
    }

    res.status(500).json({ error: "Failed to generate email", details: err.message });
  }
});

// ✅ Route to send the email using Nodemailer
app.post('/send-email', async (req, res) => {
  const { recipients, subject, content } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: recipients,
      subject: subject || "AI Generated Email",
      html: content,
    });

    res.status(200).json({ message: "✅ Email sent successfully!" });
  } catch (err) {
    console.error("❌ Email Send Error:", err.message);
    res.status(500).json({ error: "Failed to send email", details: err.message });
  }
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
