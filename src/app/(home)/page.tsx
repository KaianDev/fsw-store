import Image from "next/image";
import Categories from "./components/categories";

export default function Home() {
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

      <div className="mt-8">
        <Categories />
      </div>
    </div>
  );
}
