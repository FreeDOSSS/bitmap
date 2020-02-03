import React from "react";
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
import "./App.scss";

import router from "./helper/router";

function App() {
  const { home, users } = router;
  return (
    <BrowserRouter>
      <Switch>
        <Route path={home.path} component={home.component} exact />
        <Route path={users.path} component={users.component} exact />
        <Redirect to={home.path} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
