export const BranchOffices = () => {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Otras sucursales</h2>
      <div className="flex items-center justify-center mb-6">
        <span
          className="material-icons material-icons-outlined "
          style={{ fontSize: 60, color: "var(--color-secondary)" }}
        >
          maps_home_work
        </span>
      </div>
      <p className="text-center text-2xl">
        Además de nuestra oficina principal, disponemos de oficinas
        descentralizadas en <b>zona oeste</b> y <b>zona sur</b>; también
        ofrecemos <u>asesoramiento virtual</u>.
      </p>
    </section>
  );
};
