import * as React from "react";
import RpsComputer from "./common/rps-computer";
import { Button } from "react-bootstrap";
import { ScoreDetails } from "../../data-models/rps-models";
import { gameRules } from "../../utils/rps-game-rules";

interface ComputerVsComputerProps {}

interface ComputerVsComputerState {
  show: boolean;
  scoreDetails: any;
  // scoreDetails: ScoreDetails;
}

class ComputerVsComputer extends React.Component<
  ComputerVsComputerProps,
  ComputerVsComputerState
> {
  state: ComputerVsComputerState = {
    show: false,
    scoreDetails: {
      computerOne: {
        score: 0,
        name: Object.keys(gameRules)[0].toString(),
      },
      computerTwo: {
        score: 0,
        name: Object.keys(gameRules)[0].toString(),
      },
    },
  };
  render() {
    return (
      <div>
        <figure className="text-center">
          <blockquote className="blockquote">
            <p className="badge bg-success m-2">Computer Versus Computer</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            Play as Computer vs computer
          </figcaption>
        </figure>
        <div className="container">
          <div className="row">
            <div className="col">{/* <RpsComputer /> */}</div>
            <div className="col">{/* <RpsComputer /> */}</div>
          </div>
        </div>
        <Button
          variant="primary"
          className="m-2 btn-sm"
          style={{ alignContent: "center" }}
        >
          Play
        </Button>
        <Button
          variant="warning"
          className="m-2 btn-sm"
          style={{ float: "right" }}
        >
          Restart Game
        </Button>
      </div>
    );
  }
}

export default ComputerVsComputer;
