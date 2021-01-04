import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SLUGS from "../resources/slugs";
import LoadingComponent from "../components/loading";

const Signup = lazy(() => import("./auth/signup"));
const Signin = lazy(() => import("./auth/login"));
// const DashboardComponent = lazy(() => import("./dashboard"));
function PublicRoutes() {
  return (
    <Suspense fallback={<LoadingComponent loading />}>
      <Switch>
        <Route path={SLUGS.signup} component={Signup} />
        <Route path={SLUGS.login} component={Signin} />

        <Route
          path={SLUGS.forgotPassword}
          render={() => <div>forgotPassword</div>}
        />
        <Redirect to={SLUGS.signup} />
      </Switch>
    </Suspense>
  );
}

export default PublicRoutes;
