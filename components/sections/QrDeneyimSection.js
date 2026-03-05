export default function QrDeneyimSection({ sections, className, id }) {
  return (
    <section className={className || "qr-section"} id={id}>
      <div className="qr-deneyim">
        {sections.map((s) => (
          <div key={s.heading} className="bolum">
            <h2>{s.heading}</h2>

            {s.intro && <p className="giris-p">{s.intro}</p>}

            {s.paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}

            {s.list && (
              <ul>
                {s.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            {s.paragraphsAfter.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
