import { Banner } from "@/components/banner";
import { RetirementProcedureSection } from "@/components/retirement-procedure-section";

export default function Jubilaciones() {
  return (
    <main>
      <Banner
        backgroundImage="banner-2.jpeg"
        backgroundSize="cover"
        backgroundPosition="center 35%"
        backgroundRepeat="no-repeat"
        height="1000px"
      />
      <RetirementProcedureSection />
    </main>
  );
}
