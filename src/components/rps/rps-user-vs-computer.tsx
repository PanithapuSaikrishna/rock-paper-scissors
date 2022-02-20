import * as React from "react";
import RpsUser from "./common/rps-user";
import RpsComputer from "./common/rps-computer";
import { Button, Toast, ToastContainer } from "react-bootstrap";
import { ScoreDetails, Scores } from "../../data-models/rps-models";
import { gameRules } from "../../utils/rps-game-rules";
import "./rps-user-vs-computer.css";
import { ToastMsg } from "../../data-models/rps-models";

interface UserVsComputerProps {}

interface UserVsComputerState {
  show: boolean;
  scoreDetails: any;
}

class UserVsComputer extends React.Component<
  UserVsComputerProps,
  UserVsComputerState
> {
  state: UserVsComputerState = {
    show: false,
    scoreDetails: {
      user: {
        score: 0,
        name: Object.keys(gameRules)[0].toString(),
      },
      computer: {
        score: 0,
        name: Object.keys(gameRules)[0].toString(),
      },
    },
  };

  toastMessage: string = ToastMsg.USER;

  setShow(val: boolean, msg: string) {
    this.toastMessage = msg;
    this.setState({
      show: val,
    });
  }

  onClickRPS(userVal: string) {
    const computerVal = this.getComputerSelection();
    if (computerVal === userVal) {
      this.setShow(true, ToastMsg.TIE);
      return;
    }
    const { tempUserScore, tempComputerScore } = this.getScores(
      userVal,
      computerVal
    );

    // const { user, computer } = this.state.scoreDetails;

    this.setState(
      {
        scoreDetails: {
          user: {
            score: this.state.scoreDetails.user.score + tempUserScore,
            name: userVal,
          },
          computer: {
            score:
              this.state.scoreDetails.computer &&
              this.state.scoreDetails.computer.score
                ? this.state.scoreDetails.computer.score + tempComputerScore
                : 0,
            name: computerVal,
          },
        },
      },
      () => {
        if (
          this.state.scoreDetails.user &&
          this.state.scoreDetails.user.score != 3 &&
          this.state.scoreDetails.computer &&
          this.state.scoreDetails.computer.score != 3
        ) {
          let msg = tempUserScore === 1 ? ToastMsg.USER : ToastMsg.COMPUTER;
          this.setShow(true, msg);
        }
        if (
          (this.state.scoreDetails.user &&
            this.state.scoreDetails.user.score === 3) ||
          (this.state.scoreDetails.computer &&
            this.state.scoreDetails.computer.score === 3)
        ) {
          // this.resetState();
          // Open dialog and disply msg and upon clicking ok reset the game
          this.state.scoreDetails.user &&
          this.state.scoreDetails.user.score === 3
            ? this.setShow(true, ToastMsg.USER_GAME_WON)
            : this.setShow(true, ToastMsg.COMPUTER_GAME_WON);
        }
      }
    );
  }

  getComputerSelection(): string {
    const gameNames = Object.keys(gameRules);
    const randomVal = Math.floor(Math.random() * gameNames.length) + 1;
    return gameNames[randomVal - 1];
  }

  getScores(Userval: string, ComputerVal: string): Scores {
    const scores: Scores = {
      tempUserScore: 0,
      tempComputerScore: 0,
    };

    if (gameRules[Userval].beats === ComputerVal) {
      scores.tempUserScore = 1;
    } else if (gameRules[ComputerVal].beats === Userval) {
      scores.tempComputerScore = 1;
    }
    return scores;
  }

  resetState() {
    this.setState({
      scoreDetails: {
        user: {
          score: 0,
          name: Object.keys(gameRules)[0].toString(),
        },
        computer: {
          score: 0,
          name: Object.keys(gameRules)[0].toString(),
        },
      },
    });
  }

  render() {
    return (
      <div>
        <figure className="text-center">
          <blockquote className="blockquote">
            <p className="badge bg-success m-2">User Versus Computer</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            Play as user vs computer
          </figcaption>
        </figure>
        <div className="container">
          <div className="row">
            <div className="col">
              <RpsUser scoreDetails={this.state.scoreDetails} />
            </div>
            <div className="col">
              <RpsComputer
                ObjPropName={"computer"}
                scoreDetails={this.state.scoreDetails}
              />
            </div>
          </div>
        </div>

        <div>
          {Object.keys(gameRules).map((rule, index) => {
            return (
              <Button
                key={index}
                variant="primary"
                className="m-2 btn-sm"
                onClick={() => this.onClickRPS(rule)}
              >
                <span className="capitalize">
                  {rule.charAt(0).toUpperCase() + rule.slice(1)}
                </span>
              </Button>
            );
          })}
          <Button
            variant="warning"
            className="m-2 btn-sm"
            style={{ float: "right" }}
            onClick={() => this.resetState()}
          >
            Restart Game
          </Button>
        </div>
        <div>
          <ToastContainer position="bottom-center">
            <Toast
              onClose={() => this.setShow(false, "")}
              show={this.state.show}
              delay={2000}
              autohide
              bg={"success"}
            >
              <Toast.Header>
                <strong className="me-auto">Result</strong>
              </Toast.Header>
              <Toast.Body style={{ color: "white" }}>
                {this.toastMessage}
              </Toast.Body>
            </Toast>
          </ToastContainer>
        </div>
      </div>
    );
  }
}

export default UserVsComputer;
