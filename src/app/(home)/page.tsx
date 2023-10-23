import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "@/components/ui/product-list";
import SectionTitle from "@/components/ui/section-title";
import { BannerSection } from "./components/banner-section";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <div className="flex flex-col gap-8 py-8">
      <BannerSection
        src="/banner-home-1.png"
        alt="Até 55% de desconto esse mês"
      />

      <div className="px-5">
        <Categories />
      </div>

      <div className="flex flex-col">
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <BannerSection
        src="/banner-home-2.png"
        alt="Até 55% de desconto em mouses"
      />

      <div>
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>

      <BannerSection
        src="/banner-home-3.png"
        alt="Até 20% de desconto em fones"
      />

      <div>
        <SectionTitle>Mouses</SectionTitle>
        <ProductList products={mouses} />
      </div>
    </div>
  );
}
