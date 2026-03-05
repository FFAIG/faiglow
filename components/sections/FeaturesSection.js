export default function FeaturesSection({ features }) {
  return (
    <section className="features" id="ozellikler">
      {features.map((f) => (
        <div key={f.heading} className="feature">
          <h3>{f.heading}</h3>
          <p>{f.text}</p>
        </div>
      ))}
    </section>
  );
}
