import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../../store";
import Home from "../../pages/index.page";
import { mockedArrayProducts } from "../mocks";
import userEvent from "@testing-library/user-event";

describe("Home page", () => {
  it("should render all components", () => {
    render(
      <Provider store={store}>
        <Home products={mockedArrayProducts} />
      </Provider>
    );

    const header = screen.getByTestId("header");
    const cards = screen.getAllByTestId("cards");
    const footer = screen.getByTestId("footer");

    expect(header).toBeInTheDocument();
    expect(cards.length).toEqual(2);
    expect(footer).toBeInTheDocument();
  });

  it("should be open cart", async () => {
    render(
      <Provider store={store}>
        <Home products={mockedArrayProducts} />
      </Provider>
    );
    const user = userEvent.setup();
    const btn = screen.getByTestId("btn-cart");
    const asideCart = screen.getByTestId("aside-cart");

    expect(asideCart).not.toHaveClass("active");
    await user.click(btn);
    expect(asideCart).toHaveClass("active");
  });

  it("should be close cart", async () => {
    render(
      <Provider store={store}>
        <Home products={mockedArrayProducts} />
      </Provider>
    );
    const user = userEvent.setup();
    const btnClose = screen.getByTestId("btn-close");
    const asideCart = screen.getByTestId("aside-cart");

    await user.click(btnClose);
    expect(asideCart).not.toHaveClass("active");
  });

  it("should add producs at cart", async () => {
    render(
      <Provider store={store}>
        <Home products={mockedArrayProducts} />
      </Provider>
    );
    const user = userEvent.setup();
    const btnAdd = screen.getAllByTestId("btn-add");

    await user.click(btnAdd[0]);
    expect(screen.getByTestId("cart-product")).toBeInTheDocument();
  });

  it("should update total value at cart", async () => {
    render(
      <Provider store={store}>
        <Home products={mockedArrayProducts} />
      </Provider>
    );
    const value = screen.getByTestId("cart-total");

    expect(value).toHaveTextContent("R$ 100");
  });

  it("should remove products at cart", async () => {
    render(
      <Provider store={store}>
        <Home products={mockedArrayProducts} />
      </Provider>
    );
    const user = userEvent.setup();
    const btnRemove = screen.getByTestId("remove-products");
    const product = screen.getByTestId("cart-product");

    expect(product).toBeInTheDocument();
    await user.click(btnRemove);
    expect(product).not.toBeInTheDocument();
  });

  it("should update total value when remove product from cart", async () => {
    render(
      <Provider store={store}>
        <Home products={mockedArrayProducts} />
      </Provider>
    );
    const value = screen.getByTestId("cart-total");

    expect(value).toHaveTextContent("R$ 0");
  });
});
