import { IProducts } from "@/pages";
import { montserrat } from "@/pages/_app";
import Image from "next/image";
import ShopIcon from "../ShopIcon";
import { DivCard } from "./style";

const ProductCard = ({ name, brand, description, photo, price }: IProducts) => {
  return (
    <DivCard>
      <Image src={photo} alt={name} width={140} height={130} />
      <div className="title-card">
        <h3>{`${name}`}</h3>
        <span>
          {Number(price).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 0,
          })}
        </span>
      </div>
      <p>{description}</p>
      <button className={montserrat.className}>
        <ShopIcon /> COMPRAR
      </button>
    </DivCard>
  );
};

export default ProductCard;
