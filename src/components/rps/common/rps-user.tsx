import * as React from "react";
import Figure from "react-bootstrap/Figure";
import user from "../../../assets/user.png";
import rock from "../../../assets/rock.png";
import paper from "../../../assets/paper.png";
import scissor from "../../../assets/scissor.png";
import { gameRules } from "../../../utils/rps-game-rules";
import "./circle.css";
import { ScoreDetails } from "../../../data-models/rps-models";

interface UserProps {
  // scoreDetails: ScoreDetails;
  scoreDetails: any;
}

interface UserState {}

class User extends React.Component<UserProps, UserState> {
  getImageName() {
    //TODO: get dynamic names
    // const ruleNames = Object.keys(gameRules);
    return this.props.scoreDetails.user.name === "rock"
      ? rock
      : this.props.scoreDetails.user.name === "paper"
      ? paper
      : scissor;
  }
  render() {
    return (
      <div>
        <p className="badge bg-success m-0">Score:</p>
        <div
          id="circle"
          style={{
            background:
              this.props.scoreDetails.user.score >= 3 ? "blue" : "white",
          }}
          className="m-2"
        ></div>
        <div
          id="circle"
          style={{
            background:
              this.props.scoreDetails.user.score >= 2 ? "blue" : "white",
          }}
          className="m-2"
        ></div>
        <div
          id="circle"
          style={{
            background:
              this.props.scoreDetails.user.score >= 1 ? "blue" : "white",
          }}
          className="m-2"
        ></div>
        <Figure>
          <Figure.Image width={50} height={50} alt="User" src={user} />
          <Figure.Caption>User</Figure.Caption>
        </Figure>
        <Figure>
          <Figure.Image
            width={120}
            height={120}
            alt="Start Game by clicking below buttons"
            src={this.getImageName()}
          />
        </Figure>
      </div>
    );
  }
}

export default User;
