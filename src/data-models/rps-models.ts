export interface TotalCounters {
  name: string;
}

export interface ScoreDetails {
  user: ScoreMetaData;
  computer: ScoreMetaData;
  computerOne: ScoreMetaData;
  computerTwo: ScoreMetaData;
}

interface ScoreMetaData {
  name: string;
  score: number | undefined;
}

export interface Scores {
  tempUserScore: number;
  tempComputerScore: number;
}

export enum ToastMsg {
  USER = "User Won the Point.",
  COMPUTER = "Computer Won the Point.",
  USER_GAME_WON = "Congratulations! User Won the Game.",
  COMPUTER_GAME_WON = "Computer Won the Game.",
  TIE = "User and Computer Selected the Same",
}
