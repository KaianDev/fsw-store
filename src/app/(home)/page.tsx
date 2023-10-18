import Image from "next/image";

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
    </div>
  );
}
