import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashRouter, Route  } from "react-router-dom";

import Routes from "./Routes";

function AppRouter(props) {
  return (
    <HashRouter>
      <Route path="/" component={Routes} />
    </HashRouter>
  );
}

export default AppRouter;
