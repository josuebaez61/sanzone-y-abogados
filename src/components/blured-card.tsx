interface BluredCardProps {
  children: React.ReactNode;
  className?: string;
}

export const BluredCard = ({ children, className = "" }: BluredCardProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Fondo blur */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md rounded-lg"></div>
      {/* Contenido con imagen y texto */}
      <div className="relative z-10 p-8">{children}</div>
    </div>
  );
};
