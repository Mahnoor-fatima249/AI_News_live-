# 🌐 Awaaz - Live News & AI Chatbot Engine Suite

**Awaaz** is an enterprise-grade, high-performance, full-stack application built using clean, modular software engineering patterns. The platform natively scrapes real-time fresh news feeds and live cricket scores without relying on paid or restricted third-party APIs, processing them through a cutting-edge AI layer driven by Groq Cloud.

---



## 🛠️ Tech Stack

- **Backend Framework:** Python (FastAPI) - Asynchronous, fast, and structured.
- **AI Inference Engine:** Groq Cloud Platform (`Llama 3.3` Model).
- **Frontend Core:** React.js & Tailwind CSS (Fully Responsive Grid Layout).
- **Database Layer:** MongoDB (NoSQL data store via asynchronous `motor` driver).

---

## 🔥 Key Features

### ⚙️ Backend & AI Engineering Suite (Mahnoor Fatime)
- **Zero-API-Key Data Pipelines:** Integrated robust automated XML scrapers parsing live public RSS feeds for Pakistan, India, and global trending affairs.
- **1-Minute News Summarization:** Native AI engine condensing bulky news columns into exactly 3 punchy, factual bullet points.
- **Desi / Meme Mode Toggle:** A creative LLM pipeline rewriting serious news updates into witty, sarcastic Gen-Z slang sentences.
- **AI Fact-Checker & Bias Detector:** Multi-prompt pipeline evaluating incoming media lines for credibility (High, Medium, Suspicious) and emotional bias alignment.
- **Contextual RAG Chatbot:** A live assistant fetching fresh application database news strings dynamically to provide grounded responses to user queries.

### 🎨 Frontend & UI/UX Experience (Lokesh Kumar)
- **Modern Responsive Dashboard:** Beautiful component-driven analytics layout matching data streams with zero UI flickering.
- **Live Widgets:** Real-time flashing cricket score ticker card syncs.
- **Floating Chatbot HUD:** Elegant, user-friendly interactive AI messaging window with clean loading states.

---

## 📂 Repository Directory Structure

```text
backend/
├── app/
│   ├── api/             # REST Endpoints (news.py, cricket.py, chatbot.py)
│   ├── database/        # Async Motor Client Configuration
│   ├── middleware/      # Logger and security implementations
│   ├── models/          # MongoDB schemas mapping (Pydantic objects)
│   ├── schemas/         # HTTP request/response validative frameworks
│   ├── services/        # AI engines, Scrapers & core computation classes
│   ├── utils/           # Encryption configs, core global helpers
│   ├── config.py        # Environmental settings injection routing
│   └── main.py          # FastAPI application server bootstrap entry
├── .env                 # Protected Secrets (Groq keys, MongoDB URIs)
├── .gitignore           # File indexing block patterns
├── Dockerfile           # Platform image container specs
└── requirements.txt     # Python dependency mapping core

```

---

## 🚀 Local Installation & Setup

### Prerequisites

Make sure you have **Python 3.10+** and **MongoDB** installed and running on your local machine.

### 1. Clone the Repository

```bash
git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
cd YOUR_REPO_NAME/backend

```

### 2. Configure Environment Variables

Create a `.env` file inside the `backend/` directory:

```env
PROJECT_NAME="Awaaz Live News AI"
ENVIRONMENT="development"
SECRET_KEY="YOUR_JWT_SECRET_KEY"

MONGO_DETAILS="mongodb://localhost:27017"
DATABASE_NAME="awaaz_news_db"

GROQ_API_KEY="YOUR_GROQ_CLOUD_API_KEY"

```

### 3. Install Dependencies

```bash
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
pip install -r requirements.txt

```

### 4. Run the Backend Server

```bash
uvicorn app.main:app --reload

```

Once the server starts, open `http://127.0.0.1:8000/docs` in your browser to interact with the auto-generated **Swagger API Documentation**.

---

## 👥 Authors & Collaborators

* **Mahnoor Fatime** - *Backend Architect & AI Engineer*
* **Lokesh Kumar** - *UI/UX Designer & Frontend Developer* 
---

Developed with 💙 by Team Mahnoor.

```
