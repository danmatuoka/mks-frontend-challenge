import { IProducts } from "@/pages";
import { montserrat } from "@/pages/_app";
import Image from "next/image";
import ShopIcon from "../ShopIcon";
import { DivCard } from "./style";
import { useDispatch } from "react-redux";
import { addProducts } from "@/store/products/productsSlice";

const ProductCard = (product: IProducts) => {
  const dispatch = useDispatch();

  return (
    <DivCard>
      <Image src={product.photo} alt={product.name} width={140} height={130} />
      <div className="title-card">
        <h3>{`${product.name}`}</h3>
        <span>
          {Number(product.price).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 0,
          })}
        </span>
      </div>
      <p>{product.description}</p>
      <button
        className={montserrat.className}
        onClick={() => dispatch(addProducts(product))}
      >
        <ShopIcon /> COMPRAR
      </button>
    </DivCard>
  );
};

export default ProductCard;
