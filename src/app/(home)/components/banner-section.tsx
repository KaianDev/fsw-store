import Image from "next/image";

interface BannerSectionProps {
  src: string;
  alt: string;
}

export const BannerSection = ({ src, alt }: BannerSectionProps) => {
  return (
    <Image
      src={src}
      width={0}
      height={0}
      sizes="100vw"
      className="h-auto w-full px-5"
      alt={alt}
    />
  );
};
