# 📄 AI Summarizer

An AI-powered document summarizer that extracts text from **PDF**, **DOCX**, and **PPTX** files and generates concise, structured summaries using **Google Gemini 2.5 Flash**.

🔗 **Live Demo:** https://ai-summarizer-ecru.vercel.app/

---

## 🚀 Features

- 📄 Upload PDF documents
- 📝 Upload DOCX documents
- 📊 Upload PowerPoint (PPTX) presentations
- 🤖 AI-generated summaries using Gemini 2.5 Flash
- 📌 Organized output with:
  - Short Summary
  - Key Concepts
  - Important Points
  - Formulas & Definitions
  - Potential Exam Questions
- ⚡ Fast and responsive React interface
- 🌐 Fully deployed (Frontend + Backend)

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- JavaScript
- CSS

### Backend
- FastAPI
- Python

### AI
- Google Gemini 2.5 Flash API

### Document Processing
- PyPDF
- python-docx
- python-pptx

### Deployment
- Frontend: Vercel
- Backend: Render

---

## 📂 Project Structure

```
AI_Summarizer/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   │   └── app.py
│   ├── requirements.txt
│   └── .env
│
├── images/
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/pranshi147/AI_Summarizer.git

cd AI_Summarizer
```

---

### 2. Backend Setup

```bash
cd backend

python -m venv venv
```

Activate virtual environment

**Windows**

```bash
venv\Scripts\activate
```

**Mac/Linux**

```bash
source venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Create a `.env` file

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Run the backend

```bash
uvicorn src.app:app --reload
```

Backend runs on

```
http://localhost:8000
```

---

### 3. Frontend Setup

```bash
cd frontend

npm install
```

Create a `.env` file

```env
VITE_API_URL=http://localhost:8000
```

Run

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

## 📷 Screenshots

### Home Page

![Home Page](./images/home.png)

### Upload Document

![Upload Document](./images/upload.png)

### Generated Summary

![Generated Summary](./images/summary.png)

---

## 🌐 Deployment

### Frontend

- Vercel

### Backend

- Render

---

## 📌 API Endpoint

### POST `/summarize`

Upload a supported document.

**Supported formats**

- PDF
- DOCX
- PPTX

Returns

```json
{
  "summ": "Generated AI Summary..."
}
```

---

## 🔮 Future Improvements

- Drag & Drop Upload
- Summary Download (PDF/DOCX)
- Chat with Document
- Multiple Language Support
- User Authentication
- Summary History
- Dark/Light Theme Toggle

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 👩‍💻 Author

**Pranshi Mittal**

- **GitHub:** https://github.com/pranshi147
- **LinkedIn:** https://www.linkedin.com/in/pranshimittal/

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub!