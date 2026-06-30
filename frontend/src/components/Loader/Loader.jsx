import "./Loader.scss";

function Loader() {
  return (
    <section className="loader-section">

      <div className="loader-card">

        <div className="loader-spinner"></div>

        <h2>Generating Summary</h2>

        <p>Please wait while we process your document.</p>

      </div>

    </section>
  );
}

export default Loader;