import { Banner } from "./banner";
import { BannerButton } from "./banner-button";

export const OnlineSupportSection = () => {
  return (
    <Banner
      backgroundImage="online-support-section-background.jpg"
      backgroundSize="cover"
      backgroundPosition="bottom"
      backgroundRepeat="no-repeat"
    >
      <div className="p-20">
        <h2 className="text-5xl font-bold text-right mb-6 text-white">
          Atención Online
        </h2>
        <div className="text-right">
          <BannerButton>Contactar</BannerButton>
        </div>
      </div>
    </Banner>
  );
};
