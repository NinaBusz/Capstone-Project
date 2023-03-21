import Heading from "../components/Heading";
import { render, screen } from "@testing-library/react";

test("renders the heading with 'Ideas-App' text", () => {
  render(<Heading>Ideas-App</Heading>);
  const headingElement = screen.getByText("Ideas-App");
  expect(headingElement).toBeInTheDocument();
});
