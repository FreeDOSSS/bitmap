import React from "react";
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
import "./App.scss";

import router from "./helper/router";

function App() {
  const { home, users, stats } = router;
  return (
    <BrowserRouter>
      <Switch>
        <Route path={home.path} component={home.component} exact />
        <Route path={users.path} component={users.component} exact />
        <Route path={stats.path} component={stats.component} exact />
        <Redirect to={home.path} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
