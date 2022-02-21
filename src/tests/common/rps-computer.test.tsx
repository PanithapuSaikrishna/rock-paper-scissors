import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import { unmountComponentAtNode } from "react-dom";
import { gameRules } from "../../utils/rps-game-rules";
import Computer from "../../components/rps/common/rps-computer";

jest.mock("../../utils/files-loader.ts", () => ({
  importFiles: () => {
    return [
      "/static/media/paper.7c8702a13b3bbe5d7d34.png",
      "/static/media/rock.10f5e3200a686999d964.png",
      "/static/media/scissors.b4e500d9874a41b399f0.png",
    ];
  },
}));
describe("rps-Computer", () => {
  let container: any = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
    const scoreDetails = {
      computerOne: {
        score: 0,
        name: Object.keys(gameRules)[0].toString(),
      },
      computerTwo: {
        score: 0,
        name: Object.keys(gameRules)[0].toString(),
      },
    };
    render(
      <Computer scoreDetails={scoreDetails} ObjPropName={"computerOne"} />
    );
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test("renders Score text", () => {
    const element = screen.getByText("Score:");
    expect(element).toBeInTheDocument();
  });
  test("renders figure text", () => {
    const element = screen.getByText("Computer");
    expect(element).toBeInTheDocument();
  });

  test("returns image name", () => {
    const imageElement = screen.getByTestId("image");
    expect(imageElement).toBeInTheDocument();
    expect(fireEvent.click(screen.getByTestId("image"))).toBeTruthy();
  });
});
