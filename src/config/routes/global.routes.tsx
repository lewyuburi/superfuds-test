import React from 'react';
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import AppRouter from "./app.routes";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <AppRouter />
      </Switch>
    </Router>
  );
};

export default Routes;
