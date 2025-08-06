# 📧 AI Email Generator

A full-stack web application that generates AI-powered emails from custom prompts and sends them via email. Built using React, Node.js, Groq API, and Nodemailer.

---

## 🚀 Features

* ✍️ Write your own prompt to generate email content
* 🧠 Uses Groq LLM models (e.g., `gpt-oss-20b`, `llama3-8b`) for AI generation
* 📅 Responsive UI with clear status messages
* 📧 Sends emails through Gmail using Nodemailer
* 📂 Clean and maintainable code structure

---

## 📆 Project Structure

```
ai-email-generator/
├── client/         # React frontend
│   └── src/
│       ├── App.js
│       └── App.css
├── server/         # Node + Express backend
│   ├── index.js
│   └── .env        # Environment variables (DO NOT commit)
└── README.md
```

---

## 📂 Tech Stack

* **Frontend**: React, Axios, CSS
* **Backend**: Node.js, Express
* **AI API**: Groq (Chat Completion endpoint)
* **Email**: Nodemailer + Gmail

---

## ⚙️ Environment Setup

Create a `.env` file inside the `server/` folder:

```env
GROQ_API_KEY=your_groq_api_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
```

> 📆 Use a [Gmail App Password](https://myaccount.google.com/apppasswords) for `EMAIL_PASS`.

---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/ai-email-generator.git
cd ai-email-generator
```

### 2. Install and run the backend

```bash
cd server
npm install
node index.js
```

### 3. Install and run the frontend

```bash
cd ../client
npm install
npm start
```

Frontend runs at: `http://localhost:3000`
Backend runs at: `http://localhost:5000`

---



## 🛌 Submission Checklist

* [x] `.env` and `node_modules` are excluded from GitHub
* [x] Tested full flow: Prompt → Generate → Edit → Send

---

## 🙌 Author

**Rahul Shriram Jadhao**
mailto:jadhaorahul06@gmail.com

---

## 📝 License

This project is for internship assignment/demo purposes only.
