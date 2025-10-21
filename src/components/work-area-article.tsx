import { WorkArea } from "@/models";
import Image from "next/image";
import Icon from "@mui/material/Icon";

export const WorkAreaArticle = ({ workArea }: { workArea: WorkArea }) => {
  return (
    <article className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg">
      {/* <div className="relative overflow-hidden rounded-full h-40 w-40 mb-4">
        <Image
          src={workArea.image}
          alt={workArea.name}
          objectFit="cover"
          fill
          unoptimized
          // placeholder="blur"
          // blurDataURL="https://placehold.co/80x80"
        />
      </div> */}
      <div className="flex items-center justify-center h-40 w-40 mb-4 rounded-full border border-secondary-light border-4">
        <span
          className="material-icons material-icons-outlined "
          style={{ fontSize: 40, color: "var(--color-secondary)" }}
        >
          {workArea.icon}
        </span>
      </div>
      <h3 className="text-md font-bold text-xl">{workArea.name}</h3>
    </article>
  );
};
