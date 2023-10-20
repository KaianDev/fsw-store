import { Product } from "@prisma/client";

interface ProductWithTotalPrice extends Product {
  totalPrice: number;
}

export const ComputedTotalPrice = (product: Product): ProductWithTotalPrice => {
  if (product.discountPercentage > 0) {
    const totalDiscount = product.discountPercentage / 100;
    const totalPrice = Number(product.basePrice) * totalDiscount;

    return { ...product, totalPrice };
  } else {
    return { ...product, totalPrice: Number(product.basePrice) };
  }
};
