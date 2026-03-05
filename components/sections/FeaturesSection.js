export default function FeaturesSection({ features, intro }) {
  return (
    <section id="ozellikler" className="features-section">
      {intro && (
        <div className="features-intro">
          {intro.map((line, i) => <p key={i}>{line}</p>)}
        </div>
      )}
      <div className="features">
        {features.map((f) => (
          <div key={f.heading} className="feature">
            <h3>{f.heading}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
