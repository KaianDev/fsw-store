import { LayoutGridIcon } from "lucide-react";
import BadgeTitle from "@/components/ui/badge-title";
import { prismaClient } from "@/lib/prisma";
import CatalogItem from "./components/catalog-item";

const CategoryPage = async () => {
  const categories = await prismaClient.category.findMany();
  return (
    <div className="flex flex-col gap-8 pb-16 pt-8">
      <div className="pl-5">
        <BadgeTitle>
          <LayoutGridIcon size={16} />
          Catálogo
        </BadgeTitle>
      </div>
      <div className="grid grid-cols-2 gap-8 px-5">
        {categories.map((category) => (
          <CatalogItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
