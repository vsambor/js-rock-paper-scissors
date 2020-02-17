const ROUTER_VIEW_ID = 'router-view';

export default class Router {
  constructor(routes) {
    this.routes = routes;
    this.routerView = document.getElementById(ROUTER_VIEW_ID);

    this._renderComponentForCurrentPath();
    this._addHashChangeListener();
  }

  _addHashChangeListener() {
    window.onhashchange = () => this._renderComponentForCurrentPath();
  }

  _renderComponentForCurrentPath() {
    const currentHash = window.location.hash || '/';
    const currentRoute = this.routes.find(route => route.path === currentHash);

    if (currentRoute) {
      this._renderComponent(currentRoute.component);
    } else {
      // Falls back on root.
      window.location.href = window.location.origin;
    }
  }

  _renderComponent(Component) {
    this.routerView.innerHTML = '';
    this.routerView.append(new Component());
  }
}
