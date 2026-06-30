import "./Upload.scss";

function Upload({ file, setFile, loading, handleUpload }) {
  return (
    <section className="upload-section" id="upload">
      <div className="upload-card">

        <div className="upload-header">
          <h2>Upload Your Document</h2>
          <p>
            Drag & drop your file or click below to browse.
            Supported formats: PDF, DOCX, PPTX.
          </p>
        </div>

        <label className="drop-zone">
          <input
            type="file"
            accept=".pdf,.docx,.pptx"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <div className="upload-icon">
            📄
          </div>

          {file ? (
            <>
              <h3>{file.name}</h3>
              <span>Ready to generate a summary</span>
            </>
          ) : (
            <>
              <h3>Drop your file here</h3>
              <span>or click to browse</span>
            </>
          )}
        </label>

        <button
          className="upload-btn"
          onClick={handleUpload}
          disabled={loading || !file}
        >
          {loading ? "Generating..." : "Generate Summary"}
        </button>

      </div>
    </section>
  );
}

export default Upload;