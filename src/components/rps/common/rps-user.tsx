import * as React from "react";
import Figure from "react-bootstrap/Figure";
import user from "../../../assets/user.png";
import "./circle.css";
import { ScoreDetails } from "../../../data-models/rps-models";

interface UserProps {
  scoreDetails: ScoreDetails;
}

interface UserState {}

class User extends React.Component<UserProps, UserState> {
  getImageName() {
    let imageUrl = "";
    const { name } = this.props.scoreDetails.user;
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
          <Figure.Caption>Player</Figure.Caption>
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
