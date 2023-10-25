import { prismaClient } from "@/lib/prisma";
import ProductImage from "./components/product-image";
import ProductDetails from "./components/product-details";
import { computedTotalPrice } from "@/helpers/computed-total-price";
import SectionTitle from "@/components/ui/section-title";
import ProductList from "@/components/ui/product-list";

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: params.slug,
              },
            },
          },
        },
      },
    },
  });

  if (!product) {
    return null;
  }

  return (
    <div className="flex flex-col gap-8 pb-8">
      <ProductImage product={product} />
      <ProductDetails product={computedTotalPrice(product)} />
      <div>
        <SectionTitle>Produtos Recomendados</SectionTitle>
        <ProductList products={product.category.products} />
      </div>
    </div>
  );
};

export default ProductPage;
