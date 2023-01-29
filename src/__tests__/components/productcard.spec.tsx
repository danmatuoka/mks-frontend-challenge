import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../../store";
import ProductCard from "../../components/ProductCard";
import { mockedProduct1 } from "../mocks";

describe("Product card component", () => {
  it("should render card with all infos", () => {
    render(
      <Provider store={store}>
        <ProductCard {...mockedProduct1} />
      </Provider>
    );

    const img = screen.getByRole("img");
    const title = screen.getByText(mockedProduct1.name);
    const price = screen.getByText(`R$ ${mockedProduct1.price}`);
    const description = screen.getByText(mockedProduct1.description);
    const btn = screen.getAllByRole("button");

    expect(img).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(btn.length).toStrictEqual(1);
  });
});
