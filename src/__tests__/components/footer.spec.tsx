import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../../components/Footer";

describe("Footer component", () => {
  it("should render text", () => {
    render(<Footer />);
    const text = screen.getByTestId("footer");

    expect(text.textContent).toStrictEqual(
      "MKS sistemas © Todos os direitos reservados"
    );
  });
});
