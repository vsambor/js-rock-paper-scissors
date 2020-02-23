/**
 * Holdes common constants.
 ***/

export const PLAYER_1_WON_RESULT = 'Player 1 won';
export const PLAYER_2_WON_RESULT = 'Player 2 won';
export const DRAW_RESULT = 'Draw';

export const SOUND_PATH_LIST = {
  background: '../../assets/sounds/bg.mp3',
  click: '../../assets/sounds/click.mp3',
  hover: '../../assets/sounds/hover.mp3',
  switch: '../../assets/sounds/switch.mp3',
  win1: '../../assets/sounds/win1.mp3',
  win2: '../../assets/sounds/win2.mp3',
  win3: '../../assets/sounds/win3.mp3',
  win4: '../../assets/sounds/win4.mp3',
  draw1: '../../assets/sounds/draw1.mp3',
  draw2: '../../assets/sounds/draw2.mp3',
  lose1: '../../assets/sounds/lose1.mp3',
  lose2: '../../assets/sounds/lose2.mp3'
};

export const WIN_SOUNDS_LIST = [
  SOUND_PATH_LIST.win1,
  SOUND_PATH_LIST.win2,
  SOUND_PATH_LIST.win3,
  SOUND_PATH_LIST.win4
];

export const LOSE_SOUNDS_LIST = [
  SOUND_PATH_LIST.lose1,
  SOUND_PATH_LIST.lose2
]

export const DRAW_SOUNDS_LIST = [
  SOUND_PATH_LIST.draw1,
  SOUND_PATH_LIST.draw2
];
