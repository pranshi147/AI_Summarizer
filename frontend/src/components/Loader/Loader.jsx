import "./Loader.scss";

function Loader() {
  return (
    <section className="loader-section">

      <div className="loader-card">

        <div className="loader-spinner"></div>

        <h2>Generating Summary</h2>

        <p>Please wait... The first request may take up to a minute if the backend is waking up from inactivity. Subsequent summaries are typically much faster.</p>

      </div>

    </section>
  );
}

export default Loader;