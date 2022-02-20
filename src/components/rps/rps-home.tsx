import * as React from "react";
import ComputerVsComputer from "./rps-computer-vs-computer";
import UserVsComputer from "./rps-user-vs-computer";
import { GameRules } from "./common/rps-game-rules";

import "./rps-home.css";

interface RpsHomeProps {}

interface RpsHomeState {}

class RpsHome extends React.Component<RpsHomeProps, RpsHomeState> {
  // state = { :  }
  render() {
    return (
      <div>
        <GameRules />
        <div className="container">
          <div className="row">
            <div className="col">
              <div id="parent">
                <div id="userComputer">
                  <UserVsComputer />
                </div>
                <div className="vl"></div>
              </div>
            </div>
            <div className="col">
              <ComputerVsComputer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RpsHome;
