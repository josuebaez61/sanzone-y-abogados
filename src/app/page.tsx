import { AboutUsSection } from "@/components/about-us-section";
import { Banner } from "@/components/banner";
import { FAQsSection } from "@/components/faqs-section";
import { OnlineSupportSection } from "@/components/online-support-section";
import { OurOfficesSection } from "@/components/our-offices-section";
import { WorkAreasSection } from "@/components/work-areas-section";

export default function Home() {
  return (
    <main className="space-y-20">
      <Banner backgroundImage="banner-1.jpeg" />
      <AboutUsSection />
      <WorkAreasSection />
      <OurOfficesSection />
      <FAQsSection />
    </main>
  );
}
