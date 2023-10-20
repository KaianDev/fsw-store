import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "@/components/ui/product-list";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <div>
      <Image
        src="/banner-home-1.png"
        width={0}
        height={0}
        sizes="100vw"
        className="h-auto w-full px-5"
        alt="Até 55% de desconto esse mês"
      />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <ProductList products={deals} />
    </div>
  );
}
