"use client";
import { Button } from "primereact/button";

interface BannerButtonProps {
  icon?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const BannerButton = ({
  icon,
  children,
  onClick,
}: BannerButtonProps) => {
  return (
    <Button
      className="bg-primary text-white px-6 py-2 rounded-md text-xl !rounded-full"
      onClick={() => onClick?.()}
    >
      {icon && <i className={`${icon} text-xl`} />}
      {children}
    </Button>
  );
};
