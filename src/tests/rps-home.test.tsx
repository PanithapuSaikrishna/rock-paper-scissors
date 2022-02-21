import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import { unmountComponentAtNode } from "react-dom";
import RpsHome from "../components/rps/rps-home";

jest.mock("../utils/files-loader.ts", () => ({
  importFiles: () => {
    return [
      "/static/media/paper.7c8702a13b3bbe5d7d34.png",
      "/static/media/rock.10f5e3200a686999d964.png",
      "/static/media/scissors.b4e500d9874a41b399f0.png",
    ];
  },
}));

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

test.skip("renders rps home comp", () => {
  render(<RpsHome />);
  const linkElement = screen.getByText("Computer");
  //   const linkElement2 = screen.gte
  expect(linkElement).toBeInTheDocument();
});
