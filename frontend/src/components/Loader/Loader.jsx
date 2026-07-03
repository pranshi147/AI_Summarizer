import "./Loader.scss";

function Loader() {
  return (
    <section className="loader-section">

      <div className="loader-card">

        <div className="loader-spinner"></div>

        <h2>Generating Summary</h2>

        <p>⏳ Generating your summary... If this is your first request, it may take up to a minute while the backend starts up. Subsequent requests are usually much faster.</p>

      </div>

    </section>
  );
}

export default Loader;