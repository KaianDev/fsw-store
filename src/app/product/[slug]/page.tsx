import { prismaClient } from "@/lib/prisma";
import ProductDetails from "./components/product-details";
import { computedTotalPrice } from "@/helpers/computed-total-price";
import SectionTitle from "@/components/ui/section-title";
import ProductList from "@/components/ui/product-list";
import ProductImages from "./components/product-image";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

const ProductPage = async ({ params }: ProductPageProps) => {
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
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
      <ProductDetails product={computedTotalPrice(product)} />
      <div>
        <SectionTitle>Produtos Recomendados</SectionTitle>
        <ProductList products={product.category.products} />
      </div>
    </div>
  );
};

export default ProductPage;
