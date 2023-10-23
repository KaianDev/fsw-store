import { prismaClient } from "@/lib/prisma";
import ProductImage from "./components/product-image";

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const product = await prismaClient.product.findFirst({
    where: { slug: params.slug.toString() },
  });

  if (!product) {
    return null;
  }

  return (
    <div>
      <ProductImage product={product} />
    </div>
  );
};

export default ProductPage;
