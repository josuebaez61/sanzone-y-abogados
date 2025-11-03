import { Banner } from "./banner";
import { BannerButton } from "./banner-button";
import { CONTACT_INFO } from "@/constants";

export const OurOfficesSection = () => {
  return (
    <Banner
      backgroundImage="our-offices-section-background.jpeg"
      height="600px"
    >
      <div className="flex justify-center items-center h-full">
        <div className="relative max-w-6xl mx-auto">
          {/* Fondo blur */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-lg"></div>

          {/* Contenido */}
          <div className="relative z-10 p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Conoce nuestra oficina
            </h2>
            <p className="text-2xl text-white mb-8 leading-relaxed">
              Te esperamos con la mejor atención profesional
            </p>
            <a href={CONTACT_INFO.mapUrl} target="_blank">
              <BannerButton icon="pi pi-map-marker">Ver ubicación</BannerButton>
            </a>
          </div>
        </div>
      </div>
    </Banner>
  );
};
