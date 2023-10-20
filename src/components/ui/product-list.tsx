import { Product } from "@prisma/client";
import ProductItem from "./product-item";

interface ProductListProps {
  products: Product[];
}
const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex w-full gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden p-5">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
