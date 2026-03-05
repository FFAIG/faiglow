export default function TwoColSection({ items }) {
  return (
    /* Mobile: stacked → Tablet/Desktop: 2 columns with sensible gap */
    <div className="w-full py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16 bg-white flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16 lg:gap-32 max-w-wide w-full">
        {items.map((item) => (
          <div key={item.heading} className="text-center">
            <h3 className="text-[11px] sm:text-[14px] font-semibold tracking-[0.12em] uppercase text-[#111] mb-4 leading-[1.4]">
              {item.heading}
            </h3>
            <p className="text-[12px] sm:text-[15px] font-light leading-[1.75] text-[#444]">
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
