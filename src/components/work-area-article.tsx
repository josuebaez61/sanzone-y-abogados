import { WorkArea } from "@/models";
import Image from "next/image";

export const WorkAreaArticle = ({ workArea }: { workArea: WorkArea }) => {
  return (
    <article className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg">
      <div className="relative overflow-hidden rounded-full h-40 w-40 mb-4">
        <Image
          src={workArea.image}
          alt={workArea.name}
          objectFit="cover"
          fill
          unoptimized
          // placeholder="blur"
          // blurDataURL="https://placehold.co/80x80"
        />
      </div>
      <h3 className="text-md font-bold">{workArea.name}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        {workArea.description}
      </p>
    </article>
  );
};
