import "./Summary.scss";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Summary({ summary }) {
  if (!summary) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      alert("Summary copied!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="summary-section" id="summary">
      <div className="summary-card">

        <div className="summary-header">
          <div>
            <h2>Summary</h2>
            <p>Generated using AI</p>
          </div>

          <button onClick={handleCopy}>
            Copy
          </button>
        </div>

        <div className="summary-content">
    <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {summary}
    </ReactMarkdown>
</div>

      </div>
    </section>
  );
}

export default Summary;