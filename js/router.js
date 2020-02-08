class Router {
  constructor(routes) {
    this.routes = routes;
    this.init();
  }

  init() {
    window.onhashchange = () => {
      for (const route of this.routes) {
        if (route.path === window.location.hash) {
          alert(route);
        }
      }
    }
  }
}

export default Router;
