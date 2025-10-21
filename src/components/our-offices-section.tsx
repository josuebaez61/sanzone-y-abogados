import { Button } from "primereact/button";
import { Banner } from "./banner";
import { BannerButton } from "./banner-button";

export const OurOfficesSection = () => {
  const backgroundImage =
    process.env.NODE_ENV === "production"
      ? "/sanzone-y-abogados/assets/images/our-offices-section-background.jpeg"
      : "/assets/images/our-offices-section-background.jpeg";

  return (
    <Banner backgroundImage="our-offices-section-background.jpeg">
      <div className="p-20">
        <h2 className="text-5xl font-bold text-left mb-6 text-white">
          Conoce nuestras oficinas
        </h2>
        <BannerButton icon="pi pi-map-marker">Ver ubicacion</BannerButton>
      </div>
    </Banner>
  );
};
