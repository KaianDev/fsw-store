import Image, { ImageProps } from "next/image";

export const PromoBanner = (props: ImageProps) => {
  return (
    <Image
      width={0}
      height={0}
      sizes="100vw"
      className="h-auto w-full px-5"
      {...props}
    />
  );
};
