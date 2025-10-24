export const BluredCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Fondo blur */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md rounded-lg"></div>
      {/* Contenido con imagen y texto */}
      <div className="relative z-10 p-8">{children}</div>
    </div>
  );
};
