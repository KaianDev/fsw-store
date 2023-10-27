"use client";
import { Button } from "@/components/ui/button";
import { Product } from "@prisma/client";

import Image from "next/image";
import { useState } from "react";

interface ProductImageProps {
  imageUrls: string[];
  name: string
}

const ProductImages = ({ imageUrls, name }: ProductImageProps) => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex h-96 items-center justify-center bg-accent">
        <Image
          src={imageUrls[active]}
          width={0}
          height={0}
          sizes="100vw"
          alt={name}
          className="h-3/4 w-3/4 object-contain"
        />
      </div>
      <div className="-mt-1 grid grid-cols-4 gap-4 rounded-lg bg-background px-5">
        {imageUrls.map((img, key) => (
          <Button
            key={img}
            variant="outline"
            className={`h-24 w-full bg-accent
              ${imageUrls[active] === img && "border-2 border-primary"}
            `}
            onClick={() => setActive(key)}
          >
            <Image
              src={img}
              alt={name}
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto object-contain"
            />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
