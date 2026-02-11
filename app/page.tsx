import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero";
import { DealsSection } from "@/components/sections/deals";
import { CategoriesSection } from "@/components/sections/categories";
import { FeaturedSection } from "@/components/sections/featured";
import { CustomCtaSection } from "@/components/sections/custom-cta";
import { AboutSection } from "@/components/sections/about";
import { CrimsonAffairSection } from "@/components/sections/crimson-affair";
import { AstraCollectionSection } from "@/components/sections/AstraCollectionSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <HeroSection />
        <CustomCtaSection />
        <DealsSection />
        <CrimsonAffairSection />
        <CategoriesSection />
        <AstraCollectionSection />
        <FeaturedSection />
        <CustomCtaSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
