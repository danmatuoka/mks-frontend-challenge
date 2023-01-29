import { IProducts } from "@/pages/index.page";

export const mockedProduct1: IProducts = {
  id: 1,
  name: "iPhone",
  brand: "Apple",
  description: "description",
  photo: "https://url",
  price: 100,
};

export const mockedProduct2: IProducts = {
  id: 2,
  name: "Notebook",
  brand: "Dell",
  description: "description",
  photo: "https://url",
  price: 200,
};

export const mockedArrayProducts: IProducts[] = [
  mockedProduct1,
  mockedProduct2,
];
