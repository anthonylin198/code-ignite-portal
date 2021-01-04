import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";
import PrivateSection from "./PrivateSection";
import PublicRoutes from "./PublicRoutes";

// redux and axios
import setAuthToken from "../utils/setAuthToken";
import { useDispatch } from "react-redux";
import { loadUserAction } from "../redux/actions/user";

function Routes() {
  const { pathname } = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [width, height] = useWindowSize();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const dispatch = useDispatch();

  // Set authentication logic here
  let isUserLoggedIn = false;
  if (localStorage.token) {
    isUserLoggedIn = true;
    setAuthToken(localStorage.token);
  }

  useEffect(() => {
    const loadUserData = async () => {
      setAuthToken(localStorage.token); // sets the x-auth headers
      try {
        // load user action
        dispatch(loadUserAction());
      } catch (err) {
        console.log("error");
      }
    };
    loadUserData();
  }, [dispatch]);

  return isUserLoggedIn ? <PrivateSection /> : <PublicRoutes />;
}

export default Routes;
