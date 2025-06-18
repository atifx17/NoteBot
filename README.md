# 📝 NoteBot

**NoteBot** is a modern **full-stack note-taking application** designed for speed, simplicity, and smart note creation. With **Gemini AI integration**, users can get intelligent suggestions and generate note content automatically. NoteBot combines a lightweight UI with AI-powered features to enhance productivity and creativity.

> 📦 Frontend: Vite + React (deployed on Vercel)  
> 🔧 Backend: Node.js + Express (deployed on Render)  
> 🤖 AI: Gemini AI API (Google Generative AI)

---

## 🚀 Features

- ✍️ Create and edit notes quickly
- 🤖 AI-Powered Note Suggestions (Gemini AI)
- 🧠 Smart content generation
- 📁 LocalStorage support for saving notes
- 🌐 Lightweight Express backend for future scaling
- ⚡ Vite + React for blazing fast frontend
- 📱 Fully responsive design

---

## 🧠 Gemini AI Integration

NoteBot integrates **Google's Gemini AI API** to offer intelligent assistance while writing notes. This allows users to:

- 💡 Generate note content from prompts
- ✨ Rewrite or summarize existing notes
- 🧠 Get ideas or outlines from simple keywords

### Example Flow:

1. User types a topic or sentence.
2. Clicks on “Generate”
3. Gemini AI returns relevant content/suggestions.
4. Output is inserted directly into the note.


## 🛠️ Tech Stack

| Layer       | Technology         |
|-------------|--------------------|
| Frontend    | React, Vite, CSS Modules |
| Backend     | Node.js, Express        |
| AI          | Gemini AI |
| Deployment  | Vercel (frontend), Render (backend) |

## 🔗 Live Demo

The project is deployed on **Vercel+Render**:

👉 [Visit NoteBot Live](https://note-bot-alpha.vercel.app/)  
Note: It takes time to Genrate first flash card as it's a free Deployment so server takes time to restart.

## 📁 Project Structure
```
NoteBot/
├── client/ # React + Vite frontend
│ ├── src/
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ ├── assets/
│ │ ├── index.css
│ │ ├── App.css
│ ├── vite.config.js
│ └──  .env # Frontend API
├── server/ # Node.js + Express backend
│ ├── index.js
│ └── .env # Store Gemini API Key securely
```
## ⚙️ Getting Started

### 📦 Clone the Repository

```bash
git clone https://github.com/atifx17/NoteBot.git
cd notebot
```
### 🔧 Frontend Setup
```bash
cd client
npm install
npm run dev
```
App runs at: http://localhost:5173

### ⚙️ Backend Setup
```bash
cd server
npm install
node index.js
```
Server runs at: http://localhost:3000

### 🌍 Deployment
Frontend: Vercel Deployment

Backend: Render Deployment

### 🔐 Environment Variables
client/.env
```bash
VITE_API_URL=your_backend_url
```
server/.env
```bash
GEMINI_API_KEY=your_gemini_api_key
```
## 🧑‍💻 Author
**[MD Atif Alam](https://www.linkedin.com/in/atifx17/)**  
Full Stack Developer | MERN | AI Integration Enthusiast  
[LinkedIn](https://www.linkedin.com/in/atifx17/) • [GitHub](https://github.com/atifx17)

## 💡 Future Enhancements
🧠 Voice-to-Note using Speech Recognition

☁️ Cloud sync with MongoDB

🔒 User login/authentication

🧩 More AI modes: summarization, title suggestion, etc.