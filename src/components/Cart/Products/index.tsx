import { RootState } from "@/store";
import { removeProducts, addProducts } from "@/store/products/productsSlice";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { BtnCheck, DivAside, DivContent, DivQt, NameText } from "./style";

const Products = () => {
  const prd = useSelector((state: RootState) => state.products.cartProducts);
  const dispatch = useDispatch();
  console.log(prd);
  return (
    <>
      {prd &&
        prd.map((elem) => {
          return (
            <DivAside key={elem.id}>
              <DivContent>
                <Image
                  src={elem.photo}
                  alt={elem.name}
                  width="70"
                  height="70"
                />
                <NameText>{elem.name}</NameText>
                <DivQt>
                  <BtnCheck onClick={() => dispatch(removeProducts(elem.id))}>
                    -
                  </BtnCheck>
                  <span>{elem.quantity}</span>
                  <BtnCheck onClick={() => dispatch(addProducts(elem))}>
                    +
                  </BtnCheck>
                </DivQt>
                <p>
                  {Number(elem.price).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                    minimumFractionDigits: 0,
                  })}
                </p>
              </DivContent>
            </DivAside>
          );
        })}
    </>
  );
};

export default Products;
