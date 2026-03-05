export default function FeaturesSection({ features }) {
  return (
    /* Mobile: single column stack → Tablet: 2 cols → Desktop: 3 cols */
    <section
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-white py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16 gap-10 lg:gap-0 items-center"
      id="ozellikler"
    >
      {features.map((f) => (
        <div key={f.heading} className="text-center lg:pr-8 last:pr-0">
          <h3 className="text-[11px] sm:text-[14px] font-semibold tracking-[0.12em] uppercase text-[#111] mb-4 leading-[1.4]">
            {f.heading}
          </h3>
          <p className="text-[12px] sm:text-[15px] font-light leading-[1.75] text-[#444]">
            {f.text}
          </p>
        </div>
      ))}
    </section>
  );
}
