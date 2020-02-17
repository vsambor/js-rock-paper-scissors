import Router from './src/utils/router.js';
import Menu from './src/views/Menu.js';
import PlayerVsComputer from './src/views/PlayerVsComputer.js';
import ComputerVsComputer from './src/views/ComputerVsComputer.js';
import Multiplayer from './src/views/Multiplayer.js';

const routes = [
  {
    path: '/',
    component: Menu
  },
  {
    path: '#player-vs-computer',
    component: PlayerVsComputer
  },
  {
    path: '#computer-vs-computer',
    component: ComputerVsComputer
  },
  {
    path: '#multiplayer',
    component: Multiplayer
  }
]

new Router(routes);
