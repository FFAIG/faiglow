import Image from "next/image";
import Link from "next/link";

export default function HeroSection({ data }) {
  return (
    <section className="hero">

      <div className="hero-clip">
        <Image
          src={data.backgroundImage.src}
          alt={data.backgroundImage.alt}
          fill
          priority
          sizes="100vw"
          quality={95}
          style={{ objectFit: "cover" }}
        />
      </div>

      <Image
        src={data.productImage.src}
        alt=""
        aria-hidden="true"
        width={800}
        height={1000}
        priority
        sizes="(max-width:640px) 75vw, (max-width:1024px) 50vw, 45vw"
        quality={92}
        className="hero-product-img"
        style={{ height: "auto" }}
      />

      {/* Overlay: stacks vertically, tight on mobile, spacious on desktop */}
      <div className="absolute bottom-[8%] sm:bottom-[10%] left-[4%] sm:left-[5%] z-20 flex flex-col items-start gap-2 sm:gap-4">
        <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-white/80">
          {data.eyebrow}
        </p>
        <h1
          className="font-bold tracking-[0.08em] uppercase text-white leading-[1.2]"
          style={{ fontSize: "clamp(16px, 2vw, 36px)", textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
        >
          {data.headline.map((line, i) => (
            <span key={i}>{i > 0 && <br />}{line}</span>
          ))}
        </h1>
        <div className="flex flex-wrap gap-2 sm:gap-4 mt-1 sm:mt-2">
          {data.ctas.map((cta) =>
            cta.variant === "primary" ? (
              <Link key={cta.href} href={cta.href} className="cta-primary">
                {cta.label}
              </Link>
            ) : (
              <a key={cta.href} href={cta.href} className="cta-secondary">
                {cta.label}
              </a>
            )
          )}
        </div>
      </div>

    </section>
  );
}
