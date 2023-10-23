import { LayoutGridIcon } from "lucide-react";
import CatalogList from "./components/catalog-list";
import BadgeTitle from "@/components/ui/badge-title";

const CategoryPage = () => {
  return (
    <div className="flex flex-col gap-8 pb-16 pt-8">
      <div className="pl-5">
        <BadgeTitle>
          <LayoutGridIcon size={16} />
          Catálogo
        </BadgeTitle>
      </div>
      <CatalogList />
    </div>
  );
};

export default CategoryPage;
