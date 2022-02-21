import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import { unmountComponentAtNode } from "react-dom";
import ComputerVsComputer from "../components/rps/rps-computer-vs-computer";
jest.mock("../utils/files-loader.ts", () => ({
  importFiles: () => {
    return [
      "/static/media/paper.7c8702a13b3bbe5d7d34.png",
      "/static/media/rock.10f5e3200a686999d964.png",
      "/static/media/scissors.b4e500d9874a41b399f0.png",
    ];
  },
}));
describe("ComputerVsComputer", () => {
  let container: any = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
    render(<ComputerVsComputer />);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test("renders header text", () => {
    const headerElement = screen.getByText("Play as Computer vs Computer");
    expect(headerElement).toBeInTheDocument();
    const element = screen.getByText("Play");
    expect(element).toBeInTheDocument();
    const btnElement = screen.getByText("Restart Game");
    expect(btnElement).toBeInTheDocument();
  });
});
