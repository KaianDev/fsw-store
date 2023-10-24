import { prismaClient } from "@/lib/prisma";
import ProductImage from "./components/product-image";
import { computedTotalPrice } from "@/helpers/computed-total-price";
import { localeToBrlPrice } from "@/helpers/locale-to-brl-price";
import { Badge } from "@/components/ui/badge";
import { ArrowDownIcon } from "lucide-react";
import QuantityControl from "./components/quantity-control";

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const product = await prismaClient.product.findFirst({
    where: { slug: params.slug },
  });

  if (!product) {
    return null;
  }

  const totalPrice = localeToBrlPrice(computedTotalPrice(product).totalPrice);
  const basePrice = localeToBrlPrice(Number(product.basePrice));

  return (
    <div className="flex flex-col">
      <ProductImage product={product} />
      <div className="flex flex-col gap-4 px-5">
        <p className="text-lg">{product.name}</p>
        <div>
          {product.discountPercentage > 0 ? (
            <>
              <div className="flex items-center gap-2 ">
                <p className="text-2xl font-bold">{totalPrice}</p>
                <Badge className="flex w-fit px-2 hover:bg-primary">
                  <ArrowDownIcon size={16} />
                  <span className="text-xs font-bold">
                    %{product.discountPercentage}
                  </span>
                </Badge>
              </div>
              <p className="text-sm opacity-75">
                De: <span className="line-through">{basePrice}</span>
              </p>
            </>
          ) : (
            <p className="text-2xl font-bold">{totalPrice}</p>
          )}
        </div>
        <QuantityControl />
      </div>
      
    </div>
  );
};

export default ProductPage;
