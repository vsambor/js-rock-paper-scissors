import Router from './src/utils/router.js';
import Menu from './src/components/Menu.js';
import PlayerVsComputer from './src/components/PlayerVsComputer.js';
import ComputerVsComputer from './src/components/ComputerVsComputer.js';

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
  }
]

new Router(routes);