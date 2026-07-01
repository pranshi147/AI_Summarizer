# 📄 AI Summarizer

An AI-powered document summarization web application that helps students and professionals quickly extract key information from lengthy documents. Upload your notes or study material in PDF, DOCX, or PPTX format and receive a concise AI-generated summary within seconds.

---

## ✨ Features

- 📄 Upload PDF, DOCX, and PPTX documents
- 🤖 AI-generated document summaries
- ⚡ Fast and responsive user interface
- 🎨 Modern glassmorphism-inspired UI
- 🌌 Animated starry background with shooting stars
- 📋 Copy generated summaries with one click
- 📱 Responsive design for desktop and mobile devices
- 📝 Markdown rendering for structured summaries

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- SCSS
- React Icons
- React Markdown

### Backend
- FastAPI
- Python

### AI & NLP
- Hugging Face Transformers
- Natural Language Processing (NLP)

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
│   ├── main.py
│   ├── requirements.txt
│   └── models/
│
└── README.md
```

---

## 🚀 Installation

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

Activate the virtual environment.

Windows

```bash
venv\Scripts\activate
```

Mac/Linux

```bash
source venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run FastAPI

```bash
uvicorn main:app --reload
```

Backend will start on

```
http://localhost:8000
```

---

### 3. Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend will start on

```
http://localhost:5173
```

---

## 📷 Screenshots

### Home Page

_Add screenshots here_

### Upload Document

_Add screenshots here_

### Generated Summary

_Add screenshots here_

---

## 🔮 Future Improvements

- Drag-and-drop document upload
- Support for TXT and Markdown files
- Download summary as PDF
- Multiple summarization styles
- Multilingual summarization
- User authentication
- Summary history

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch

```
git checkout -b feature-name
```

3. Commit your changes

```
git commit -m "Added new feature"
```

4. Push your branch

```
git push origin feature-name
```

5. Open a Pull Request

---

## 👩‍💻 Author

**Pranshi Mittal**

GitHub:
https://github.com/pranshi147

LinkedIn:
(Add your LinkedIn profile)

---

## ⭐ Show your support

If you found this project useful, consider giving it a ⭐ on GitHub.

## 📜 License

This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.