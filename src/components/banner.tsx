import { PropsWithChildren } from "react";

export interface BannerProps extends PropsWithChildren {
  backgroundImage: string;
  backgroundSize?: "cover" | "contain" | "auto" | string;
  backgroundPosition?: "center" | "top" | "bottom" | "left" | "right" | string;
  backgroundRepeat?: "no-repeat" | "repeat" | "repeat-x" | "repeat-y";
  height?: string;
}

export const Banner = ({
  backgroundImage,
  children,
  backgroundSize = "cover",
  backgroundPosition = "center",
  backgroundRepeat = "no-repeat",
  height = "600px",
}: BannerProps) => {
  const backgroundImageUrl =
    process.env.NODE_ENV === "production"
      ? `/sanzone-y-abogados/assets/images/${backgroundImage}`
      : `/assets/images/${backgroundImage}`;

  return (
    <div
      aria-hidden="true"
      style={{
        height: height,
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
