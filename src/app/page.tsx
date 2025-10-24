import { AboutUsSection } from "@/components/about-us-section";
import { Banner } from "@/components/banner";
import { BranchOffices } from "@/components/branch_offices";
import { FAQsSection } from "@/components/faqs-section";
import { OurOfficesSection } from "@/components/our-offices-section";
import { WorkAreasSection } from "@/components/work-areas-section";

export default function Home() {
  return (
    <main className="space-y-20">
      <Banner backgroundImage="banner-1.jpeg" />
      <AboutUsSection />
      <WorkAreasSection />
      <OurOfficesSection />
      <BranchOffices />
      <FAQsSection />
    </main>
  );
}
