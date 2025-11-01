import { WorkArea as WorkAreaModel } from "@/models";

export const WorkArea = ({ workArea }: { workArea: WorkAreaModel }) => {
  return (
    <a
      href={workArea.url}
      className="group flex flex-col items-center text-center space-y-2 p-6 rounded-xl bg-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer border border-gray-100 hover:border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2"
      aria-label={`Ver más sobre ${workArea.name}`}
    >
      <div className="flex items-center justify-center h-40 w-40 mb-6 rounded-full border-4 border-secondary-light group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300 ease-in-out relative overflow-hidden">
        {/* Efecto de brillo en hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>

        <span
          className="material-icons material-icons-outlined relative z-10 group-hover:scale-110 group-hover:text-primary transition-all duration-300 ease-in-out"
          style={{ fontSize: 60, color: "var(--color-secondary)" }}
        >
          {workArea.icon}
        </span>
      </div>

      <h3 className="text-md font-bold text-xl text-gray-800 group-hover:text-primary transition-colors duration-300 ease-in-out">
        {workArea.name}
      </h3>

      {/* Indicador de enlace */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <span className="text-sm text-primary font-medium flex items-center gap-1">
          Ver más
          <span className="material-icons text-sm">arrow_forward</span>
        </span>
      </div>
    </a>
  );
};
