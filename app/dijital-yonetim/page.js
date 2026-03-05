import Image from "next/image";
import { dijitalContent } from "@/data/content";
import DigiHeroSection from "@/components/sections/DigiHeroSection";
import QrDeneyimSection from "@/components/sections/QrDeneyimSection";
import GalleryBand from "@/components/sections/GalleryBand";
import TwoColSection from "@/components/sections/TwoColSection";

export const metadata = dijitalContent.metadata;

export default function DijitalYonetimPage() {
  const { phoneImage } = dijitalContent;
  return (
    <>
      <DigiHeroSection data={dijitalContent.hero} />

      <QrDeneyimSection
        sections={dijitalContent.qrDeneyimi}
        id="qr-deneyimi"
      />

      <GalleryBand image={dijitalContent.galleryImage} />

      <QrDeneyimSection
        sections={dijitalContent.qrContent}
        className="qr-section-sm"
      />

      <div className="full-width-image">
        <Image
          src={phoneImage.src}
          alt={phoneImage.alt}
          width={phoneImage.width}
          height={phoneImage.height}
          loading="lazy"
          sizes="100vw"
          quality={90}
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <TwoColSection items={dijitalContent.twoCol} />
    </>
  );
}
