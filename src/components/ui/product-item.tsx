"use client";

import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDownIcon } from "lucide-react";
import { ProductWithTotalPriceInterface } from "@/helpers/computed-total-price";

interface ProductItemProps {
  product: ProductWithTotalPriceInterface;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex w-40 flex-col gap-4 ">
      <div className="relative flex h-40 w-40 items-center justify-center rounded-lg bg-accent">
        {/* IMAGEM */}
        <Image
          src={product.imageUrls[0]}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[60%] w-auto max-w-[80%]"
          alt={product.name}
        />
        {product.discountPercentage > 0 && (
          <Badge className="absolute left-3 top-3 px-2 py-1">
            <ArrowDownIcon size={14} />
            <span className="text-xs font-bold">
              %{product.discountPercentage}
            </span>
          </Badge>
        )}
      </div>
      <div className="flex flex-col">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-xs">
          {product.name}
        </p>
        {product.discountPercentage > 0 ? (
          <div>{product.totalPrice}</div>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
