import { Banner } from "./banner";
import { BannerButton } from "./banner-button";
import { CONTACT_INFO } from "@/constants";

export const OurOfficesSection = () => {
  return (
    <Banner backgroundImage="our-offices-section-background.jpeg">
      <div className="p-20">
        <h2 className="text-5xl font-bold text-left mb-1 text-white">
          Conoce nuestra oficina
        </h2>
        <p className="text-2xl text-left mb-6 text-white">
          Te esperamos con la mejor atención
        </p>
        <a href={CONTACT_INFO.mapUrl} target="_blank">
          <BannerButton icon="pi pi-map-marker">Ver ubicacion</BannerButton>
        </a>
      </div>
    </Banner>
  );
};
