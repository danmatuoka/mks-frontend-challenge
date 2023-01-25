import { IProducts } from "@/pages";
import { montserrat } from "@/pages/_app";
import Image from "next/image";
import { DivCard } from "./style";

const ProductCard = ({ name, description, photo, price }: IProducts) => {
  return (
    <DivCard>
      <Image src={photo} alt={name} width={140} height={130} />
      <h3>{name}</h3>
      <span>
        {Number(price).toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
          minimumFractionDigits: 0,
        })}
      </span>
      <p>{description}</p>
      <button className={montserrat.className}>COMPRAR</button>
    </DivCard>
  );
};

export default ProductCard;
