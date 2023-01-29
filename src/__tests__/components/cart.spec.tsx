import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../../store";
import Cart from "../../components/Cart";

describe("Aside cart component", () => {
  it("should render cart infos without products", () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    const title = screen.getByText("Carrinho de compras");
    const total = screen.getByText("Total:");
    const price = screen.getByText("R$ 0");
    const btn = screen.getAllByRole("button");

    expect(title).toBeInTheDocument();
    expect(total).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(btn.length).toStrictEqual(2);
  });
});
