import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SLUGS from "../resources/slugs";
import LoadingComponent from "../components/loading";

const DashboardComponent = lazy(() => import("./dashboard"));
const ProfileComponent = lazy(() => import("./profile"));
const CurriculumComponent = lazy(() => import("./curriculum"));
const ExploreComponent = lazy(() => import("./explore"));
const MessagesComponent = lazy(() => import("./messages"));

function PrivateRoutes() {
  return (
    <Suspense fallback={<LoadingComponent loading />}>
      <Switch>
        <Route exact path={SLUGS.profile} component={ProfileComponent} />
        <Route exact path={SLUGS.dashboard} component={DashboardComponent} />
        <Route exact path={SLUGS.curriculum} component={CurriculumComponent} />
        <Route exact path={SLUGS.explore} component={ExploreComponent} />
        <Route exact path={SLUGS.messages} component={MessagesComponent} />
        <Route exact path={SLUGS.settings} render={() => <div>settings</div>} />

        {/* startup school, this needs to be a different section */}
        <Route exact path={SLUGS.startupschool} component={MessagesComponent} />

        <Redirect to={SLUGS.dashboard} />
      </Switch>
    </Suspense>
  );
}

export default PrivateRoutes;
