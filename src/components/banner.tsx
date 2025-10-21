import { PropsWithChildren } from "react";

export interface BannerProps extends PropsWithChildren {
  backgroundImage: string;
  backgroundSize?: "cover" | "contain" | "auto";
  backgroundPosition?: "center" | "top" | "bottom" | "left" | "right";
  backgroundRepeat?: "no-repeat" | "repeat" | "repeat-x" | "repeat-y";
}

export const Banner = ({
  backgroundImage,
  children,
  backgroundSize = "cover",
  backgroundPosition = "center",
  backgroundRepeat = "no-repeat",
}: BannerProps) => {
  const backgroundImageUrl =
    process.env.NODE_ENV === "production"
      ? `/sanzone-y-abogados/assets/images/${backgroundImage}`
      : `/assets/images/${backgroundImage}`;

  return (
    <div
      style={{
        height: "600px",
        background: `url('${backgroundImageUrl}')`,
        backgroundRepeat: backgroundRepeat,
        backgroundPosition: backgroundPosition,
        backgroundSize: backgroundSize,
      }}
    >
      {children}
    </div>
  );
};
