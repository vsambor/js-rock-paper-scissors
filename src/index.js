import Router from './utils/router.js';
import Menu from './views/Menu.js';
import PlayerVsComputer from './views/PlayerVsComputer.js';
import ComputerVsComputer from './views/ComputerVsComputer.js';
import Multiplayer from './views/Multiplayer.js';

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
