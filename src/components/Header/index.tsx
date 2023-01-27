import CartIcon from "../CartIcon";
import Logo from "../Logo";
import { DivHeader } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { open } from "@/store/cart/cartSlice";
import { RootState } from "@/store";
import { montserrat } from "@/pages/_app";

const Header = () => {
  const prd = useSelector((state: RootState) => state.products.cartProducts);
  const dispatch = useDispatch();

  return (
    <DivHeader>
      <Logo />
      <button onClick={() => dispatch(open())} className={montserrat.className}>
        <CartIcon />
        {prd.length}
      </button>
    </DivHeader>
  );
};

export default Header;
