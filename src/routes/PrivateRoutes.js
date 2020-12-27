import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SLUGS from "../resources/slugs";
import LoadingComponent from "../components/loading";
import ComponentsList from "../routes/componentsList";

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
        <Route
          exact
          path={SLUGS.overviewTwo}
          render={() => <div>overviewTwo</div>}
        />
        <Route
          exact
          path={SLUGS.overviewThree}
          render={() => <div>overviewThree</div>}
        />
        <Route exact path={SLUGS.overview} render={() => <div>overview</div>} />
        <Route exact path={SLUGS.tickets} render={() => <div>tickets</div>} />
        <Route exact path={SLUGS.ideasTwo} render={() => <div>ideasTwo</div>} />
        <Route
          exact
          path={SLUGS.ideasThree}
          render={() => <div>ideasThree</div>}
        />
        <Route exact path={SLUGS.ideas} render={() => <div>ideas</div>} />
        <Route exact path={SLUGS.contacts} render={() => <div>contacts</div>} />
        <Route exact path={SLUGS.agents} render={() => <div>agents</div>} />
        <Route exact path={SLUGS.articles} render={() => <div>articles</div>} />
        <Route exact path={SLUGS.settings} render={() => <div>settings</div>} />
        <Route
          exact
          path={SLUGS.subscription}
          render={() => <div>subscription</div>}
        />
        <Route exact path={SLUGS.componentsList} component={ComponentsList} />
        <Route exact path={SLUGS.messages} component={MessagesComponent} />
        {/* startup school, this needs to be a different section */}
        <Route exact path={SLUGS.startupschool} component={MessagesComponent} />

        <Redirect to={SLUGS.dashboard} />
      </Switch>
    </Suspense>
  );
}

export default PrivateRoutes;
