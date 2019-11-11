import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Routes from "./Routes";

function AppRouter(props) {
  return (
    <Router>
      <Route path="/" component={Routes} />
    </Router>
  );
}

export default AppRouter;
