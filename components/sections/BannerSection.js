import Image from "next/image";

export default function BannerSection({ data }) {
  return (
    /* Height scales from 280px on mobile up to 620px on desktop */
    <div
      className="relative w-full overflow-hidden"
      style={{ minHeight: "clamp(280px, 40vw, 620px)" }}
    >
      <Image
        src={data.image.src}
        alt=""
        aria-hidden="true"
        fill
        loading="lazy"
        sizes="100vw"
        quality={85}
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-16 lg:px-20">
        <h2
          className="font-bold tracking-[0.18em] uppercase text-white mb-5 sm:mb-7"
          style={{
            fontSize: "clamp(18px, 2.5vw, 28px)",
            textShadow: "0 0 20px rgba(255,255,255,0.8), 0 0 60px rgba(255,255,255,0.4)",
          }}
        >
          {data.headline}
        </h2>
        <p
          className="font-normal tracking-[0.12em] uppercase text-white leading-[2]"
          style={{
            fontSize: "clamp(13px, 1.5vw, 17px)",
            textShadow: "0 0 20px rgba(255,255,255,0.8), 0 0 60px rgba(255,255,255,0.4)",
          }}
        >
          {data.textLines.map((line, i) => (
            <span key={i}>{i > 0 && <br />}{line}</span>
          ))}
        </p>
      </div>
    </div>
  );
}
