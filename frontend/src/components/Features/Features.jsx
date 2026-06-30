import "./Features.scss";
import { FiZap, FiFileText, FiCpu } from "react-icons/fi";

function Features() {
  const features = [
    {
      icon: <FiZap />,
      title: "Fast Processing",
      description: "Generate concise summaries within seconds."
    },
    {
      icon: <FiFileText />,
      title: "Multiple Formats",
      description: "Supports PDF, DOCX and PPTX documents."
    },
    {
      icon: <FiCpu />,
      title: "AI Powered",
      description: "Uses NLP to identify the most important information."
    }
  ];

  return (
    <section className="features" id="features">
      <h2>Why Choose AI Summarizer?</h2>

      <div className="feature-grid">
        {features.map((feature) => (
          <div className="feature-card" key={feature.title}>

            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;