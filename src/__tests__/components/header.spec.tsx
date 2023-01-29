import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../../components/Header";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("Header component", () => {
  it("should render button", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    const btn = screen.getByRole("button");

    expect(btn).toBeInTheDocument();
  });

  it("should render text in button", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    const btn = screen.getByText("0");

    expect(btn).toHaveTextContent("0");
  });
});
