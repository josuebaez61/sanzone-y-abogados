import { WORK_AREAS } from "@/constants";
import { WorkArea } from "./work-area";

export const WorkAreasSection = () => {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Áreas de Trabajo</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {WORK_AREAS.map((workArea) => (
          <WorkArea key={workArea.name} workArea={workArea} />
        ))}
      </div>
    </section>
  );
};
