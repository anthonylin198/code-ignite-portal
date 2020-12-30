import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";
import PrivateSection from "./PrivateSection";
import PublicRoutes from "./PublicRoutes";

function Routes() {
  const { pathname } = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [width, height] = useWindowSize();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Set authentication logic here
  // todo: check the auth token, if it is there, keep the user logged in. Or, you can get from redux store
  // const isUserLoggedIn = true;
  const isUserLoggedIn = false;
  return isUserLoggedIn ? <PrivateSection /> : <PublicRoutes />;
}

export default Routes;
