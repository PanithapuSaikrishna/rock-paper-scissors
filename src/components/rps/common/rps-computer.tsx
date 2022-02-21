import * as React from "react";
import Figure from "react-bootstrap/Figure";
import computer from "../../../assets/computer.png";
import "./circle.css";

interface ComputerProps {
  ObjPropName: "computer" | "computerOne" | "computerTwo";
  scoreDetails: any;
}

interface ComputerState {}

class Computer extends React.Component<ComputerProps, ComputerState> {
  getImageName() {
    let imageUrl = "";
    const { name } = this.props.scoreDetails[this.props.ObjPropName];
    const images = this.importAll(
      require.context("../../../assets/gameImages", false, /\.(png)$/)
    );
    images.forEach((element: string) => {
      if (element.search(name) > 0) {
        imageUrl = element;
      }
    });
    return imageUrl;
  }

  importAll(r: any) {
    return r.keys().map(r);
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
