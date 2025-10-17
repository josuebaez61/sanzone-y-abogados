import { WorkAreaArticle } from "./work-area-article";

export const WorkAreasSection = () => {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-10">Áreas de trabajo</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <WorkAreaArticle />
        <WorkAreaArticle />
        <WorkAreaArticle />
        <WorkAreaArticle />
      </div>
    </section>
  );
};
