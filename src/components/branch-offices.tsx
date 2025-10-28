import { WHATSAPP_URL } from "@/constants";

export const BranchOffices = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-gray-50 rounded-lg shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
              Otras Sucursales
            </h2>

            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center mb-8">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <span
                    className="material-icons material-icons-outlined"
                    style={{ fontSize: 48, color: "var(--color-primary)" }}
                  >
                    maps_home_work
                  </span>
                </div>
              </div>

              <div className="p-6 rounded-lg max-w-4xl">
                <p className="text-center text-xl text-gray-700 leading-relaxed">
                  Además de nuestra oficina principal, disponemos de oficinas
                  descentralizadas en{" "}
                  <strong className="text-primary">zona oeste</strong> y
                  <strong className="text-primary"> zona sur</strong>; también
                  ofrecemos{" "}
                  <a href={WHATSAPP_URL} target="_blank">
                    <strong className="text-primary underline">
                      asesoramiento virtual
                    </strong>
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
