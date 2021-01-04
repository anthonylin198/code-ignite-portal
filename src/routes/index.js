import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";
import PrivateSection from "./PrivateSection";
import PublicRoutes from "./PublicRoutes";

// redux and axios
import setAuthToken from "../utils/setAuthToken";
import { useDispatch, useSelector } from "react-redux";
import { loadUserAction } from "../redux/actions/user";

function Routes() {
  const { pathname } = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [width, height] = useWindowSize();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // useselector
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const loadUserData = async () => {
      if (localStorage.token) {
        setAuthToken(localStorage.token);
        try {
          dispatch(loadUserAction());
        } catch (err) {
          console.log("error");
        }
      }
    };
    loadUserData();
  }, [dispatch]);

  return user.isAuthenticated ? <PrivateSection /> : <PublicRoutes />;
}

export default Routes;
