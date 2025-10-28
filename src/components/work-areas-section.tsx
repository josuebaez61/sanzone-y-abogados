import { WORK_AREAS } from "@/constants";
import { WorkArea } from "./work-area";

export const WorkAreasSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-gray-50 rounded-lg shadow-lg p-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Áreas de Trabajo
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORK_AREAS.map((workArea) => (
              <WorkArea key={workArea.name} workArea={workArea} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
