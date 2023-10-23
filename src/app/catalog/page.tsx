import { Badge } from "@/components/ui/badge";
import { LayoutGridIcon } from "lucide-react";
import CatalogList from "./components/catalog-list";

const CategoryPage = () => {
  return (
    <div className="flex flex-col gap-8 pb-16 pt-8">
      <div className="pl-5">
        <Badge
          variant="outline"
          className="border-2 border-primary px-2 uppercase "
        >
          <LayoutGridIcon className="mr-1" size={16} />
          Catálogo
        </Badge>
      </div>
      <CatalogList />
    </div>
  );
};

export default CategoryPage;
