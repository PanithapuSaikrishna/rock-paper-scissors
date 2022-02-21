import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navigation/navbar";

import { unmountComponentAtNode } from "react-dom";

let container: any = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("renders nav bar header text", () => {
  render(<Navbar name={"Sai"} />);
  const linkElement = screen.getByText(/Rock-Paper-Scissors/i);
  expect(linkElement).toBeInTheDocument();
});
