export default function QrDeneyimSection({ sections, className, id }) {
  return (
    <section className={className || "bg-white py-16 sm:py-20 lg:py-[7.5rem]"} id={id}>
      <div className="px-6 sm:px-10 lg:px-16 max-w-content mx-auto">
        {sections.map((s) => (
          <div key={s.heading} className="mb-16 last:mb-0">
            <h2 className="text-[11px] sm:text-[14px] font-semibold tracking-[0.14em] uppercase text-[#111] mb-6">
              {s.heading}
            </h2>

            {s.intro && (
              <p className="text-[12px] sm:text-[15px] font-light leading-[1.9] text-[#444] mb-16">
                {s.intro}
              </p>
            )}

            {s.paragraphs.map((text, i) => (
              <p key={i} className="text-[12px] sm:text-[15px] font-light leading-[1.9] text-[#444]">
                {text}
              </p>
            ))}

            {s.list && (
              <ul className="list-none p-0 mt-4">
                {s.list.map((item) => (
                  <li
                    key={item}
                    className="relative pl-[18px] text-[12px] sm:text-[15px] font-light leading-[1.9] text-[#444] before:content-['—'] before:absolute before:left-0 before:text-[#bbb]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {s.paragraphsAfter.map((text, i) => (
              <p
                key={i}
                className={`text-[12px] sm:text-[15px] font-light leading-[1.9] text-[#444]${s.list && i === 0 ? " mt-4" : ""}`}
              >
                {text}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
