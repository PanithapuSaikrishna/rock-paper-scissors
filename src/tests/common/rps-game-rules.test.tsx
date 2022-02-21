import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import { unmountComponentAtNode } from "react-dom";
import { gameRules } from "../../utils/rps-game-rules";
import { GameRules } from "../../components/rps/common/rps-game-rules";

describe("rps-Computer", () => {
  let container: any = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
    render(<GameRules />);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test("renders accordion header text", () => {
    const headerElement = screen.getByText("Game Rules");
    expect(headerElement).toBeInTheDocument();
    const pElement = screen.getByText("1. Paper beats rock");
    expect(pElement).toBeInTheDocument();
  });
});
