"use client";

import { Badge } from "@/components/ui/badge";
import { CATEGORY_ITEM } from "@/constants/categoryIcon";
import { Category } from "@prisma/client";
import {
  HeadphonesIcon,
  KeyboardIcon,
  MonitorIcon,
  MouseIcon,
  SpeakerIcon,
  SquareIcon,
} from "lucide-react";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`category/${category.slug}`}>
      <Badge
        variant="outline"
        className="flex justify-center gap-2 rounded-lg py-3"
      >
        {CATEGORY_ITEM[category.slug as keyof typeof CATEGORY_ITEM]}
        <span className="text-xs font-bold">{category.name}</span>
      </Badge>
    </Link>
  );
};

export default CategoryItem;
