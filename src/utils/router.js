/**
 * Creates a single page application system.
 * 
 * Main roles:
 *  - accepts and holdes a list of routes i.e. {path, view}
 *  - listens to address hash change
 *  - renders a view which correspond to the current hash
 ***/

const ROUTER_VIEW_ID = 'router-view';

export default class Router {
  constructor(routes) {
    this.routes = routes;
    this.routerView = document.getElementById(ROUTER_VIEW_ID);

    this._renderViewForCurrentPath();
    this._addHashChangeListener();
  }

  _addHashChangeListener() {
    window.onhashchange = () => this._renderViewForCurrentPath();
  }

  _renderViewForCurrentPath() {
    const currentHash = window.location.hash || '/';
    const currentRoute = this.routes.find(route => route.path === currentHash);

    if (currentRoute) {
      this._renderView(currentRoute.view);
    } else {
      // Falls back on root.
      window.location.href = window.location.origin;
    }
  }

  _renderView(View) {
    this.routerView.innerHTML = '';
    this.routerView.append(new View());
  }
}
