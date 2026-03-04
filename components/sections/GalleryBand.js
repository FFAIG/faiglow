import Image from "next/image";

export default function GalleryBand({ image }) {
  return (
    <div className="gallery-band">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        sizes="150vw"
        quality={92}
        className="gallery-band-image"
      />
    </div>
  );
}
