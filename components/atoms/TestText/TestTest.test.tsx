import { render, screen } from "@testing-library/react";
import TestTest from "./TestTest";
test("renders Text", () => {
  render(<TestTest text="hello!!" />);
  const renderedText = screen.getByText("hello!!");
  expect(renderedText).toBeInTheDocument();
});
