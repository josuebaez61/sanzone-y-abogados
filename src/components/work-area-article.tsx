import { WorkArea } from "@/models";

export const WorkAreaArticle = ({ workArea }: { workArea: WorkArea }) => {
  return (
    <article className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg">
      <div className="flex items-center justify-center h-40 w-40 mb-6 rounded-full border border-secondary-light border-4">
        <span
          className="material-icons material-icons-outlined "
          style={{ fontSize: 60, color: "var(--color-secondary)" }}
        >
          {workArea.icon}
        </span>
      </div>
      <h3 className="text-md font-bold text-xl">{workArea.name}</h3>
    </article>
  );
};
