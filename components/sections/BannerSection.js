import Image from "next/image";

export default function BannerSection({ data }) {
  return (
    <div className="banner-section">
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
      <div className="banner-content">
        <h2 className="banner-headline">{data.headline}</h2>
        <p className="banner-text">
          {data.textLines.map((line, i) => (
            <span key={i}>{i > 0 && <br />}{line}</span>
          ))}
        </p>
      </div>
    </div>
  );
}
