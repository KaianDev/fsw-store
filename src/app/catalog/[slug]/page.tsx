import BadgeTitle from "@/components/ui/badge-title";
import ProductItem from "@/components/ui/product-item";
import { CATEGORY_ITEM } from "@/constants/categoryIcon";
import { computedTotalPrice } from "@/helpers/computed-total-price";
import { prismaClient } from "@/lib/prisma";

interface CatalogProductProps {
  params: {
    slug: string;
  };
}

const CatalogProduct = async ({ params }: CatalogProductProps) => {
  const products = await prismaClient.product.findMany({
    where: {
      category: {
        slug: params.slug,
      },
    },
  });

  const category = await prismaClient.category.findFirst({
    where: { slug: params.slug.toString() },
  });

  return (
    <div className="flex flex-col gap-8 px-5 py-8">
      <BadgeTitle>
        {CATEGORY_ITEM[category?.slug as keyof typeof CATEGORY_ITEM]}
        {category?.name}
      </BadgeTitle>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {products.map((product) => (
          <ProductItem key={product.id} product={computedTotalPrice(product)} />
        ))}
      </div>
    </div>
  );
};

export default CatalogProduct;
