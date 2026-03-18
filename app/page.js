import { homeContent } from "@/data/content";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import BannerSection from "@/components/sections/BannerSection";
import TwoColSection from "@/components/sections/TwoColSection";

export const metadata = homeContent.metadata;

export default function HomePage() {
  return (
    <>
      <HeroSection data={homeContent.hero} />
      <FeaturesSection features={homeContent.features} intro={homeContent.featuresIntro} />
      <BannerSection data={homeContent.banner} />
      <TwoColSection items={homeContent.twoCol} />
    </>
  );
}
