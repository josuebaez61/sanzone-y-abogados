import { REAJUSTE_PROCEDURE_ITEMS } from "@/constants";
import { ReajusteProcedureItem } from "@/models";

const ProcedureItem = ({ item }: { item: ReajusteProcedureItem }) => {
  return (
    <div className="col-span-1">
      <article className="bg-surface-100 p-8 rounded-lg gap-6 flex flex-col sm:min-h-[550px]">
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
        <h3 className="text-xl font-bold">{item.title}</h3>
        <p className="text-gray-700 leading-relaxed">{item.text}</p>
      </article>
    </div>
  );
};

export const ReajusteProcedureSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        Procedimiento de Juicio de Reajuste de Haberes Jubilatorios
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {REAJUSTE_PROCEDURE_ITEMS.map((item, index) => (
          <ProcedureItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
};
