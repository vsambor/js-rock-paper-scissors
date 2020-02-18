import Router from './src/utils/router.js';
import Menu from './src/views/Menu.js';
import PlayerVsComputer from './src/views/PlayerVsComputer.js';
import ComputerVsComputer from './src/views/ComputerVsComputer.js';
import Multiplayer from './src/views/Multiplayer.js';

const routes = [
  {
    path: '/',
    view: Menu
  },
  {
    path: '#player-vs-computer',
    view: PlayerVsComputer
  },
  {
    path: '#computer-vs-computer',
    view: ComputerVsComputer
  },
  {
    path: '#multiplayer',
    view: Multiplayer
  }
]

new Router(routes);
