import { montserrat } from "../../pages/_app.page";
import {
  BtnCart,
  ContainerAside,
  DivCartProducts,
  DivOverflow,
  DivTitle,
  DivTotal,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { open } from "../../store/cart/cartSlice";
import Products from "./Products";
import { IProducts } from "@/pages/index.page";

const Cart = () => {
  const visible = useSelector((state: RootState) => state.cart.isOpen);
  const prd = useSelector((state: RootState) => state.products.cartProducts);
  const dispatch = useDispatch();

  const sumAllProducts = (products: IProducts[]) => {
    const prices = products.map((elem) => elem.price * elem.quantity!);
    if (prices.length == 0) {
      return 0;
    }
    return prices.reduce((a, b) => a + b);
  };

  return (
    <ContainerAside
      className={visible ? "active" : ""}
      data-testid="aside-cart"
    >
      <DivTitle>
        <p>Carrinho de compras</p>
        <button
          className={montserrat.className}
          onClick={() => dispatch(open())}
          data-testid="btn-close"
        >
          X
        </button>
      </DivTitle>
      <DivOverflow>
        <Products />
      </DivOverflow>
      <DivCartProducts>
        <DivTotal>
          <span>Total:</span>
          <span data-testid="cart-total">
            {sumAllProducts(prd).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 0,
            })}
          </span>
        </DivTotal>
        <BtnCart className={montserrat.className}>Finalizar compra</BtnCart>
      </DivCartProducts>
    </ContainerAside>
  );
};

export default Cart;
