import React from "react";
import { Switch, Redirect } from "react-router-dom";

import { RouteWithLayout } from "./layouts";
import { Main as MainLayout, Minimal as MinimalLayout } from "./layouts";

import { Home as HomeView } from "./components";
import { Support as SupportView } from "./components";

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <RouteWithLayout
        component={HomeView}
        exact
        layout={MainLayout}
        path="/home"
      />
      <RouteWithLayout
        component={HomeView}
        exact
        layout={MainLayout}
        path="/drawing"
      />
      <RouteWithLayout
        component={SupportView}
        exact
        layout={MainLayout}
        path="/support"
      />
    </Switch>
  );
};

export default Routes;
