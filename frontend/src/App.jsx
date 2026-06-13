import { useState } from "react";

function Summarizer(){
  const [file, setFile]= useState(null);
  const [summ, setSumm]= useState("");

  const Upload= async() => {
    if(!file.name.endsWith(".pdf") && !file.name.endsWith(".docx")){
      alert("Invalid Document! It must be a PDF or DOCX");
      return;
  }
    else{
      alert("Successfully Uploaded");
    }

    const form= new FormData();
    form.append("file", file);

    const response= await fetch(
      "http://localhost:8000/summarize", 
      {
        method: "POST",
        body: form,
      }
      );

      const data= await response.json();
      console.log(data)
      setSumm(data.summ);
  };

  return(
    <>
    <input type="file" accept=".pdf, .docx" onChange={(e) => setFile(e.target.files[0])}>
    </input>
    <button onClick={Upload}> Summarize </button>
    <h3>Summary:</h3>
    {
      summ=="" ? <pre></pre> : <pre>{summ}</pre>
    }
    </>
  );

  }

  export default Summarizer
