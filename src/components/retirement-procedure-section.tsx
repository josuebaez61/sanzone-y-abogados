import { PROCEDURE_ITEMS } from "@/constants";
import { RetirementProcedureItem } from "@/models";

const ProcedureItem = ({ item }: { item: RetirementProcedureItem }) => {
  return (
    <div className="col-span-1">
      <article className="bg-surface-100 p-8 rounded-lg gap-6 flex flex-col sm:min-h-[480px]">
        <div className="flex justify-center">
          <div className="rounded-full bg-primary text-primary-contrast w-16 h-16 flex items-center justify-center">
            <span
              className="material-icons material-icons-outlined"
              style={{ fontSize: "2rem" }}
            >
              {item.icon}
            </span>
          </div>
        </div>
        <h3 className="text-xl font-bold">
          {item.order}. {item.title}
        </h3>
        <ul className="list-disc list-inside">
          {item.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </article>
    </div>
  );
};

export const RetirementProcedureSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        Procedimiento de Jubilación
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROCEDURE_ITEMS.sort((a, b) => a.order - b.order).map((item) => (
          <ProcedureItem key={item.order} item={item} />
        ))}
      </div>
    </section>
  );
};
