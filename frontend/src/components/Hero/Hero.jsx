import "./Hero.scss";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <div className="hero-tag">
          AI Powered • Fast • Accurate
        </div>

        <h1>
          Summarize your
          <span> documents </span>
          in seconds.
        </h1>

        <p>
          Upload PDF, DOCX or PPT files and get concise,
          easy-to-read summaries powered by AI.
        </p>

        <div className="hero-buttons">
          <a href="#upload" className="primary-btn">
    Upload Document
</a>

<a href="#features" className="secondary-btn">
    Why is it better?
</a>
        </div>

      </div>

    </section>
  );
}

export default Hero;