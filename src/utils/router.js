const ROUTER_VIEW_ID = 'router-view';

class Router {
  constructor(routes) {
    this.routes = routes;
    this.routerView = document.getElementById(ROUTER_VIEW_ID);

    this._init();
  }

  _init() {
    this._initRoot();
    this._addHashChangeListener();
  }

  _initRoot() {
    if (location.pathname == "/") {
      const rootRoute = this.routes.find(item => item.path === '/');
      if (rootRoute) {
        this.renderComponent(rootRoute.component);
      }
    }
  }

  _addHashChangeListener() {
    window.onhashchange = () => {
      for (const route of this.routes) {
        if (route.path === window.location.hash /*|| route.path === window.location.pathname*/) {
          this.renderComponent(route.component);
          break;
        }
      }
    }
  }

  renderComponent(Component) {
    this.routerView.innerHTML = '';
    this.routerView.append(new Component());
  }
}

export default Router;
