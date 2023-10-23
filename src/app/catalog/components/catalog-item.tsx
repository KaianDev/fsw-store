import { Category } from "@prisma/client";
import Image from "next/image";

interface CatalogItem {
  category: Category;
}

const CatalogItem = ({ category }: CatalogItem) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg">
      <div className="bg-gradient-category flex h-36 w-full items-center justify-center">
        <Image
          src={category.imageUrl}
          alt={category.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
        />
      </div>
      <div className="bg-accent">
        <p className="py-3 text-center text-sm">{category.name}</p>
      </div>
    </div>
  );
};

export default CatalogItem;
