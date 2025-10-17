import Image from "next/image";

export const WorkAreaArticle = () => {
  return (
    <article className="flex flex-col items-center justify-center text-center space-y-2 p-4 rounded-lg">
      <div className="relative overflow-hidden rounded-full h-40 w-40">
        <Image
          src="https://placehold.co/80x80"
          alt="Área de trabajo"
          objectFit="cover"
          fill
          unoptimized
          // placeholder="blur"
          // blurDataURL="https://placehold.co/80x80"
        />
      </div>
      <h3 className="text-xl text-base font-bold">Área de trabajo</h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </article>
  );
};
