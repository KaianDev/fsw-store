import { prismaClient } from "@/lib/prisma";
import CatalogItem from "./catalog-item";

const CatalogList = async () => {
  const categories = await prismaClient.category.findMany();

  return (
    <div className="grid grid-cols-2 gap-8 px-5">
      {categories.map((category) => (
        <CatalogItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CatalogList;
