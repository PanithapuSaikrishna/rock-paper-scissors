import * as React from "react";
import RpsComputer from "./common/rps-computer";
import { Button, Toast, ToastContainer } from "react-bootstrap";
import {
  ScoreMetaData,
  ScoresForComputer,
  ToastMsg,
} from "../../data-models/rps-models";
import { gameRules } from "../../utils/rps-game-rules";

interface ComputerVsComputerProps {}

interface ComputerVsComputerState {
  show: boolean;
  scoreDetails: {
    computerOne: ScoreMetaData;
    computerTwo: ScoreMetaData;
  };
}

class ComputerVsComputer extends React.Component<
  ComputerVsComputerProps,
  ComputerVsComputerState
> {
  inititalState = {
    computerOne: {
      score: 0,
      name: Object.keys(gameRules)[0].toString(),
    },
    computerTwo: {
      score: 0,
      name: Object.keys(gameRules)[0].toString(),
    },
  };
  toastMessage: string = "";
  state: ComputerVsComputerState = {
    show: false,
    scoreDetails: this.inititalState,
  };

  onClickPlay() {
    if (
      this.state.scoreDetails.computerOne.score === 3 ||
      this.state.scoreDetails.computerTwo.score === 3
    ) {
      this.resetState();
      this.setShow(true, ToastMsg.GAME_OVER);
      return;
    }
    this.setShow(false);
    const computerOneSelection = this.getComputerSelection();
    const computerTwoSelection = this.getComputerSelection();
    const { tempComputerOneScore, tempComputerTwoScore } = this.getScores(
      computerOneSelection,
      computerTwoSelection
    );
    // const { user, computer } = this.state.scoreDetails;

    this.setState(
      {
        scoreDetails: {
          computerOne: {
            score:
              this.state.scoreDetails.computerOne.score + tempComputerOneScore,
            name: computerOneSelection,
          },
          computerTwo: {
            score:
              this.state.scoreDetails.computerTwo.score + tempComputerTwoScore,
            name: computerTwoSelection,
          },
        },
      },
      () => {
        if (computerOneSelection === computerTwoSelection) {
          this.setShow(true, ToastMsg.COMP_VS_COMP_TIE);
          return;
        }
        if (
          this.state.scoreDetails.computerOne.score !== 3 &&
          this.state.scoreDetails.computerTwo.score !== 3
        ) {
          let msg =
            tempComputerOneScore === 1
              ? ToastMsg.COMPUTER_ONE
              : ToastMsg.COMPUTER_TWO;
          this.setShow(true, msg);
        }
        if (
          this.state.scoreDetails.computerOne.score === 3 ||
          this.state.scoreDetails.computerTwo.score === 3
        ) {
          // this.resetState();
          // Open dialog and disply msg and upon clicking ok reset the game
          this.state.scoreDetails.computerOne.score === 3
            ? this.setShow(true, ToastMsg.COMPUTER_ONE_GAME_WON)
            : this.setShow(true, ToastMsg.COMPUTER_TWO_GAME_WON);
        }
      }
    );
  }

  setShow(val: boolean, msg?: string) {
    this.toastMessage = msg ? msg : "";
    this.setState({
      show: val,
    });
  }

  getComputerSelection(): string {
    const gameNames = Object.keys(gameRules);
    const randomVal = Math.floor(Math.random() * gameNames.length) + 1;
    return gameNames[randomVal - 1];
  }

  getScores(computerOneVal: string, computerTwoVal: string): ScoresForComputer {
    const scores: ScoresForComputer = {
      tempComputerOneScore: 0,
      tempComputerTwoScore: 0,
    };

    if (gameRules[computerOneVal].beats.includes(computerTwoVal)) {
      scores.tempComputerOneScore = 1;
    } else if (gameRules[computerTwoVal].beats.includes(computerOneVal)) {
      scores.tempComputerTwoScore = 1;
    }
    return scores;
  }

  resetState() {
    this.setState({
      scoreDetails: this.inititalState,
    });
  }

  render() {
    return (
      <div>
        <figure className="text-center">
          <blockquote className="blockquote">
            <p className="badge bg-success m-2">Computer Versus Computer</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            Play as Computer vs Computer
          </figcaption>
        </figure>
        <div className="container">
          <div className="row">
            <div className="col">
              <RpsComputer
                ObjPropName={"computerOne"}
                scoreDetails={this.state.scoreDetails}
              />
            </div>
            <div className="col">
              <RpsComputer
                ObjPropName={"computerTwo"}
                scoreDetails={this.state.scoreDetails}
              />
            </div>
          </div>
        </div>
        <p>Click play to start the game</p>
        <Button
          variant="primary"
          className="m-2 btn-sm"
          style={{ alignContent: "center" }}
          onClick={() => this.onClickPlay()}
        >
          Play
        </Button>
        <Button
          variant="warning"
          className="m-2 btn-sm"
          style={{ float: "right" }}
          onClick={() => this.resetState()}
        >
          Restart Game
        </Button>
        <div>
          <ToastContainer position="bottom-center">
            <Toast
              onClose={() => this.setShow(false)}
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

export default ComputerVsComputer;
