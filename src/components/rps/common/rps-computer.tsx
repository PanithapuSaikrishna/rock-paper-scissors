import * as React from "react";
import Figure from "react-bootstrap/Figure";
import computer from "../../../assets/computer.png";
import rock from "../../../assets/rock.png";
import paper from "../../../assets/paper.png";
import scissor from "../../../assets/scissor.png";
import { ScoreDetails } from "../../../data-models/rps-models";
import "./circle.css";

interface ComputerProps {
  ObjPropName: "computer" | "computerOne" | "computerTwo";
  // scoreDetails: ScoreDetails;
  scoreDetails: any;
}

interface ComputerState {}

class Computer extends React.Component<ComputerProps, ComputerState> {
  getImageName() {
    //TODO: get dynamic names
    // const ruleNames = Object.keys(gameRules);
    const { name } = this.props.scoreDetails[this.props.ObjPropName];
    return name === "rock" ? rock : name === "paper" ? paper : scissor;
  }
  render() {
    const scoreDetails = this.props.scoreDetails[this.props.ObjPropName];
    return (
      <div>
        <p className="badge bg-success m-0">Score:</p>
        <div
          id="circle"
          style={{
            background:
              scoreDetails && scoreDetails.score >= 3 ? "blue" : "white",
          }}
          className="m-2"
        ></div>
        <div
          id="circle"
          style={{
            background:
              scoreDetails && scoreDetails.score >= 2 ? "blue" : "white",
          }}
          className="m-2"
        ></div>
        <div
          id="circle"
          style={{
            background:
              scoreDetails && scoreDetails.score >= 1 ? "blue" : "white",
          }}
          className="m-2"
        ></div>
        <Figure>
          <Figure.Image width={40} height={40} alt="User" src={computer} />
          <Figure.Caption>Computer</Figure.Caption>
        </Figure>
        <Figure>
          <Figure.Image
            width={120}
            height={120}
            alt="Start Game"
            src={this.getImageName()}
          />
        </Figure>
      </div>
    );
  }
}

export default Computer;
