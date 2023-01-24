import CartIcon from "../CartIcon";
import Logo from "../Logo";
import { DivHeader } from "./style";

const Header = () => {
  return (
    <DivHeader>
      <Logo />
      <button>
        <CartIcon />0
      </button>
    </DivHeader>
  );
};

export default Header;
