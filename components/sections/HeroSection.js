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
          quality={85}
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
        sizes="(max-width:768px) 80vw, 45vw"
        quality={82}
        style={{
          position: "absolute",
          top: "31%",
          left: "53.8%",
          transform: "translateX(-50%)",
          width: "45%",
          height: "auto",
          zIndex: 15,
          pointerEvents: "none",
        }}
      />

      <div className="hero-overlay">
        <p className="hero-eyebrow">{data.eyebrow}</p>
        <h1 className="hero-headline">
          {data.headline.map((line, i) => (
            <span key={i}>{i > 0 && <br />}{line}</span>
          ))}
        </h1>
        <div className="hero-ctas">
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
