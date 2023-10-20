import { Product } from "@prisma/client";
import ProductItem from "./product-item";
import { computedTotalPrice } from "@/helpers/computed-total-price";

interface ProductListProps {
  products: Product[];
}
const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex w-full gap-4 overflow-x-auto p-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <ProductItem key={product.id} product={computedTotalPrice(product)} />
      ))}
    </div>
  );
};

export default ProductList;
