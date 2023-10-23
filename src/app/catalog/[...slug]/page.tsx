import ProductItem from "@/components/ui/product-item";
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
        slug: `${params.slug}`,
      },
    },
  });

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-8 px-5 py-8 justify-items-center">
      {products.map((product) => (
        <ProductItem key={product.id} product={computedTotalPrice(product)} />
      ))}
    </div>
  );
};

export default CatalogProduct;
