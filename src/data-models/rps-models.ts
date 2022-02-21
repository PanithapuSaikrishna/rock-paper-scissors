export interface TotalCounters {
  name: string;
}

export interface ScoreDetails {
  user: ScoreMetaData;
  computer: ScoreMetaData;
  // computerOne?: ScoreMetaData;
  // computerTwo?: ScoreMetaData;
}

export interface ScoreMetaData {
  name: string;
  score: number;
  // ObjPropName?: "computer" | "computerOne" | "computerTwo";
}

export interface Scores {
  tempUserScore: number;
  tempComputerScore: number;
}

export interface ScoresForComputer {
  tempComputerOneScore: number;
  tempComputerTwoScore: number;
}

export enum ToastMsg {
  USER = "Player Won the Point.",
  COMPUTER = "Computer Won the Point.",
  USER_GAME_WON = "Congratulations! Player Won the Game.",
  COMPUTER_GAME_WON = "Computer Won the Game.",
  TIE = "Player and Computer Selected the Same",
  // Below for computer vs computer
  COMPUTER_ONE = "Computer One Won the Point.",
  COMPUTER_TWO = "Computer Two Won the Point.",
  COMPUTER_ONE_GAME_WON = "Computer One Won the Game.",
  COMPUTER_TWO_GAME_WON = "Computer Two Won the Game.",
  COMP_VS_COMP_TIE = "Computer One and Computer Two Selected the Same",
  // Game over msg
  GAME_OVER = "Game over and Restarting the Game...",
}
