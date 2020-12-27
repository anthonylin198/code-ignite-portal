import React from "react";

import { CardContainer } from "../../../components/layout";

import { Link } from "react-router-dom";

const StartupCurrCard = () => {
  return (
    <CardContainer>
      <h1>Phase 1: Startup School</h1>
      <Link to="/curriculum/startupschool" target="blank">
        Startup School
      </Link>
    </CardContainer>
  );
};

export default StartupCurrCard;
