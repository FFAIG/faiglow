export default function TwoColSection({ items }) {
  return (
    <div className="two-col-section">
      <div className="two-col-grid">
        {items.map((item) => (
          <div key={item.heading} className="two-col-item">
            <h3>{item.heading}</h3>
            <p>
              {item.lines.map((line, i) => (
                <span key={i}>{i > 0 && <br />}{line}</span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
