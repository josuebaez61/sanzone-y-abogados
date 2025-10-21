import { Button } from "primereact/button";

interface BannerButtonProps {
  icon?: string;
  children?: React.ReactNode;
}

export const BannerButton = ({ icon, children }: BannerButtonProps) => {
  return (
    <Button className="bg-primary text-white px-6 py-2 rounded-md text-xl !rounded-full">
      {icon && <i className={`${icon} text-xl`} />}
      {children}
    </Button>
  );
};
