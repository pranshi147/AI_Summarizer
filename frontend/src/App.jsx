import { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Upload from "./components/Upload/Upload";
import Summary from "./components/Summary/Summary";
import Loader from "./components/Loader/Loader";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import StarBackground from "./components/Background/StarBackground";
function App() {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file.");
      return;
    }

    const allowed = [".pdf", ".docx", ".pptx"];
    const validFile = allowed.some((type) => file.name.endsWith(type));

    if (!validFile) {
      alert("Only PDF, DOCX and PPTX files are supported.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:8000/summarize", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setSummary(data.summ);
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <main className="app">
      <div className="bg-circle one"></div>
      <div className="bg-circle two"></div>
<StarBackground />
<div className="page">
      <Navbar />

      <Hero />

      <Upload
    file={file}
    setFile={setFile}
    loading={loading}
    handleUpload={handleUpload}
/>

      {loading && <Loader />}

      <Summary summary={summary} />
      <Features />
      <Footer />
      </div>

    </main>
  );
}

export default App;