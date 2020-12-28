import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SLUGS from "../resources/slugs";
import LoadingComponent from "../components/loading";

const Signup = lazy(() => import("./auth/signup"));
// const DashboardComponent = lazy(() => import("./dashboard"));
function PublicRoutes() {
  return (
    <Suspense fallback={<LoadingComponent loading />}>
      <Switch>
        <Route path={SLUGS.login} component={Signup} />
        <Route path={SLUGS.signup} component={Signup} />
        <Route
          path={SLUGS.forgotPassword}
          render={() => <div>forgotPassword</div>}
        />
        <Redirect to={SLUGS.login} />
      </Switch>
    </Suspense>
  );
}

export default PublicRoutes;
