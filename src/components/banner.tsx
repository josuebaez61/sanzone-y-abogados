import { PropsWithChildren } from "react";

export interface BannerProps extends PropsWithChildren {
  backgroundImage: string;
}

export const Banner = ({ backgroundImage, children }: BannerProps) => {
  const backgroundImageUrl =
    process.env.NODE_ENV === "production"
      ? `/sanzone-y-abogados/assets/images/${backgroundImage}`
      : `/assets/images/${backgroundImage}`;

  return (
    <div
      style={{
        height: "600px",
        background: `url('${backgroundImageUrl}') no-repeat center center`,
        backgroundSize: "cover",
      }}
    >
      {children}
    </div>
  );
};
