import Image from "next/image";
import Link from "next/link";

export default function DigiHeroSection({ data }) {
  return (
    <div className="digi-header">

      <Image
        src={data.image.src}
        alt={data.image.alt}
        width={data.image.width}
        height={data.image.height}
        priority
        sizes="200vw"
        quality={90}
        className="ayna-img"
        style={{ width: "100%", height: "auto", display: "block" }}
      />

      <div className="baslik-metin">
        <h1>{data.headline}</h1>
        <Link href={data.cta.href} className="qr-btn">{data.cta.label}</Link>
      </div>

    </div>
  );
}
