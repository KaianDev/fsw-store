"use client";
import { Button } from "@/components/ui/button";
import { Product } from "@prisma/client";

import Image from "next/image";
import { useState } from "react";

interface ProductImageProps {
  product: Product;
}

const ProductImage = ({ product }: ProductImageProps) => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col">
      <div className="flex h-96 items-center justify-center bg-accent">
        <Image
          src={product.imageUrls[active]}
          width={0}
          height={0}
          sizes="100vw"
          alt={product.name}
          className="h-3/4 w-3/4 object-contain"
        />
      </div>
      <div className="-mt-1 flex justify-between rounded-lg bg-background px-5 py-8">
        {product.imageUrls.map((img, key) => (
          <Button
            key={key}
            variant="outline"
            className="h-auto bg-accent"
            onClick={() => setActive(key)}
          >
            <Image
              src={img}
              alt={`img ${key + 1}`}
              width={0}
              height={0}
              sizes="100vw"
              className="h-10 w-10 object-contain"
            />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
