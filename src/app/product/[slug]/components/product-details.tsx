"use client";

import { Badge } from "@/components/ui/badge";
import { ProductWithTotalPriceInterface } from "@/helpers/computed-total-price";
import { localeToBrlPrice } from "@/helpers/locale-to-brl-price";
import {
  ArrowDownIcon,
  ChevronLeft,
  ChevronRight,
  TruckIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ProductDetailsProps {
  product: ProductWithTotalPriceInterface;
}
const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  }

  return (
    <div className="flex flex-col gap-8 px-5">
      
      <div className="flex flex-col gap-4 ">
        <h2 className="text-lg">{product.name}</h2>
        <div>
          {product.discountPercentage > 0 ? (
            <>
              <div className="flex items-center gap-2 ">
                <h1 className="text-2xl font-bold">
                  {localeToBrlPrice(product.totalPrice)}
                </h1>
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

        <div className="flex flex-row items-center">
          <Button
            variant="outline"
            className="px-2"
            onClick={handleDecreaseQuantity}
          >
            <ChevronLeft />
          </Button>
          <div className="w-8 text-center">{quantity}</div>
          <Button
            variant="outline"
            className="px-2"
            onClick={handleIncreaseQuantity}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>

      <div>
        <h3 className="mb-3 font-bold">Descrição</h3>
        <p className="text-sm opacity-75 text-justify">{product.description}</p>
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
