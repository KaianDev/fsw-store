"use client";

import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDownIcon } from "lucide-react";
import { ProductWithTotalPriceInterface } from "@/helpers/computed-total-price";
import { localeToBrlPrice } from "@/helpers/locale-to-brl-price";
import Link from "next/link";

interface ProductItemProps {
  product: ProductWithTotalPriceInterface;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className="flex flex-col gap-3 ">
        <div className="relative flex h-[170px] w-full items-center justify-center rounded-lg bg-accent">
          {/* IMAGEM */}
          <Image
            src={product.imageUrls[0]}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[60%] w-auto max-w-[80%] object-contain"
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
            <div className="flex items-center gap-1">
              <span className="font-bold">
                {localeToBrlPrice(product.totalPrice)}
              </span>
              <span className="overflow-hidden text-ellipsis whitespace-nowrap text-xs line-through opacity-75">
                {localeToBrlPrice(Number(product.basePrice))}
              </span>
            </div>
          ) : (
            <span className="font-bold">
              {localeToBrlPrice(product.totalPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
