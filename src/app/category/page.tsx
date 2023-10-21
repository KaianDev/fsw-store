import { Badge } from "@/components/ui/badge";
import { Grid2x2Icon, LayoutGridIcon } from "lucide-react";
import CategoryList from "./components/category-list";

const CategoryPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="mt-8 pl-5">
        <Badge
          variant="outline"
          className="border-2 border-primary px-2 uppercase "
        >
          <LayoutGridIcon className="mr-1" size={16} />
          Catálogo
        </Badge>
      </div>
      <CategoryList />
    </div>
  );
};

export default CategoryPage;
