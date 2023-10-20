import { Product } from "@prisma/client";

export interface ProductWithTotalPriceInterface extends Product {
  totalPrice: number;
}

export const computedTotalPrice = (product: Product) => {
  if (product.discountPercentage > 0) {
    const totalDiscount = product.discountPercentage / 100;
    const totalPrice =
      Number(product.basePrice) - Number(product.basePrice) * totalDiscount;

    const productWithTotalPrice: ProductWithTotalPriceInterface = {
      ...product,
      totalPrice,
    };

    return productWithTotalPrice;
  } else {
    const productWithTotalPrice: ProductWithTotalPriceInterface = {
      ...product,
      totalPrice: Number(product.basePrice),
    };

    return productWithTotalPrice;
  }
};
