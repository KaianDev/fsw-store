"use client";

import { Badge } from "@/components/ui/badge";
import { ProductWithTotalPriceInterface } from "@/helpers/computed-total-price";
import { localeToBrlPrice } from "@/helpers/locale-to-brl-price";
import { ArrowDownIcon, TruckIcon } from "lucide-react";
import QuantityControl from "./quantity-control";
import { Button } from "@/components/ui/button";

interface ProductDetailsProps {
  product: ProductWithTotalPriceInterface;
}
const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <div className="flex flex-col gap-8 px-5">
      <div className="flex flex-col gap-4 ">
        <p className="text-lg">{product.name}</p>
        <div>
          {product.discountPercentage > 0 ? (
            <>
              <div className="flex items-center gap-2 ">
                <p className="text-2xl font-bold">
                  {localeToBrlPrice(product.totalPrice)}
                </p>
                <Badge className="flex w-fit px-2 hover:bg-primary">
                  <ArrowDownIcon size={16} />
                  <span className="text-xs font-bold">
                    %{product.discountPercentage}
                  </span>
                </Badge>
              </div>
              <p className="text-sm opacity-75">
                De:{" "}
                <span className="line-through">
                  {localeToBrlPrice(Number(product.basePrice))}
                </span>
              </p>
            </>
          ) : (
            <p className="text-2xl font-bold">
              {localeToBrlPrice(Number(product.basePrice))}
            </p>
          )}
        </div>
        <QuantityControl />
      </div>
      <div>
        <h2 className="text mb-2 font-bold">Descrição</h2>
        <p>{product.description}</p>
      </div>
      <Button className="font-bold uppercase">Adicionar ao carrinho</Button>
      <div className="flex items-center justify-between rounded-lg bg-accent px-5 py-2">
        <div className="flex items-center gap-2">
          <TruckIcon size={24} />
          <div className="text-xs">
            <p>
              Entrega via <strong>FSPacket®</strong>
            </p>
            <p className="text-primary">
              Envio para <strong>todo Brasil</strong>
            </p>
          </div>
        </div>
        <p className="text-sm font-bold">Frete grátis</p>
      </div>
    </div>
  );
};

export default ProductDetails;
