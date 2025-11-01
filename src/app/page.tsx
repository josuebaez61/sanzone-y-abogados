import { AboutUsSection } from "@/components/about-us-section";
import { Banner } from "@/components/banner";
import { BranchOffices } from "@/components/branch-offices";
import { FAQsSection } from "@/components/faqs-section";
import { OurOfficesSection } from "@/components/our-offices-section";
import { WorkAreasSection } from "@/components/work-areas-section";

export const metadata = {
  title: "Inicio",
  description:
    "Sanzone & Abogados: asesoramiento jurídico y contable integral. Áreas de trabajo: jubilaciones, reajustes, sucesiones, convenios internacionales, coberturas médicas e impuestos.",
};

export default function Home() {
  return (
    <main id="main-content">
      <Banner backgroundImage="banner-1.jpeg" />
      <AboutUsSection />
      <WorkAreasSection />
      <OurOfficesSection />
      <BranchOffices />
      <FAQsSection />
    </main>
  );
}
