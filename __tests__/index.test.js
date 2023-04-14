import Heading from "../components/Heading";
import { render, screen } from "@testing-library/react";

test("renders the heading with 'Ideas-App' Logo", () => {
  render(<Heading />);
  const imageElement = screen.getByAltText("Logo");
  expect(imageElement).toBeInTheDocument();
});
