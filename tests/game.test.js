import Game from "../src/models/Game.js";
import HumanPlayer from "../src/models/HumanPlayer.js";
import ComputerPlayer from "../src/models/ComputerPlayer.js";
import Rock from "../src/models/weapons/Rock.js";
import Paper from "../src/models/weapons/Paper.js";
import Scissors from "../src/models/weapons/Scissors.js";
import {
  PLAYER_1_WON_RESULT,
  PLAYER_2_WON_RESULT,
  DRAW_RESULT
} from "../src/utils/constants.js";


describe('Tests game class main functionalities', () => {
  it('gives good result when playing human vs computer game', () => {
    const human = new HumanPlayer();
    const computer = new ComputerPlayer();
    const game = new Game(human, computer);

    human.setChoice(new Paper());
    const gameResult = game.play();

    expect(gameResult).toBeTruthy();
    expect([PLAYER_1_WON_RESULT, PLAYER_2_WON_RESULT, DRAW_RESULT]).toContain(gameResult);
  });

  it('gives good result when playing computer vs computer game', () => {
    const computer1 = new ComputerPlayer();
    const computer2 = new ComputerPlayer();
    const game = new Game(computer1, computer2);

    const gameResult = game.play();

    expect(gameResult).toBeTruthy();
    expect([PLAYER_1_WON_RESULT, PLAYER_2_WON_RESULT, DRAW_RESULT]).toContain(gameResult);
  });

  it('uses correctly the weapons and the stronger always wins', () => {
    const human1 = new HumanPlayer();
    const human2 = new HumanPlayer();
    const game = new Game(human1, human2);

    let gameResult = null;

    human1.setChoice(new Rock());
    human2.setChoice(new Paper());
    gameResult = game.play();
    expect(gameResult).toBe(PLAYER_2_WON_RESULT);

    human1.setChoice(new Rock());
    human2.setChoice(new Rock());
    gameResult = game.play();
    expect(gameResult).toBe(DRAW_RESULT);

    human1.setChoice(new Rock());
    human2.setChoice(new Scissors());
    gameResult = game.play();
    expect(gameResult).toBe(PLAYER_1_WON_RESULT);

    human1.setChoice(new Paper());
    human2.setChoice(new Paper());
    gameResult = game.play();
    expect(gameResult).toBe(DRAW_RESULT);

    human1.setChoice(new Paper());
    human2.setChoice(new Rock());
    gameResult = game.play();
    expect(gameResult).toBe(PLAYER_1_WON_RESULT);

    human1.setChoice(new Paper());
    human2.setChoice(new Scissors());
    gameResult = game.play();
    expect(gameResult).toBe(PLAYER_2_WON_RESULT);

    human1.setChoice(new Scissors());
    human2.setChoice(new Paper());
    gameResult = game.play();
    expect(gameResult).toBe(PLAYER_1_WON_RESULT);

    human1.setChoice(new Scissors());
    human2.setChoice(new Rock());
    gameResult = game.play();
    expect(gameResult).toBe(PLAYER_2_WON_RESULT);

    human1.setChoice(new Scissors());
    human2.setChoice(new Scissors());
    gameResult = game.play();
    expect(gameResult).toBe(DRAW_RESULT);
  });

  it('increeases the round number for each game played', () => {
    const computer1 = new ComputerPlayer();
    const computer2 = new ComputerPlayer();
    const game = new Game(computer1, computer2);

    game.play();
    game.play();
    game.play();
    game.play();

    expect(game.numberRounds).toBe(4);
  });

  it('reset everything when triggering reset', () => {
    const computer1 = new ComputerPlayer();
    const computer2 = new ComputerPlayer();
    const game = new Game(computer1, computer2);

    game.play();
    game.play();
    game.play();
    game.play();

    expect(game.numberRounds).toBe(4);

    game.reset();

    expect(game.numberRounds).toBe(0);
    expect(computer1.score).toBe(0);
    expect(computer2.score).toBe(0);
  });
});
