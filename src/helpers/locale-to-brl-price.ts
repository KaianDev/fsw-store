export const localeToBrlPrice = (n: number) => {
  const localePrice = n.toLocaleString("pt-br", {
    currency: "BRL",
    style: "currency",
  });

  return localePrice;
};
