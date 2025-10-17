import { AboutUsSection } from "@/components/about-us-section";
import { Banner } from "@/components/banner";
import { FAQsSection } from "@/components/faqs-section";
import { WorkAreasSection } from "@/components/work-areas-section";

export default function Home() {
  return (
    <main className="space-y-20">
      <Banner />
      <AboutUsSection />
      <WorkAreasSection />
      <FAQsSection />
    </main>
  );
}
