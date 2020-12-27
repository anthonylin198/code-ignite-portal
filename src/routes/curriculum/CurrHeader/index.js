import React from "react";

import { CardContainer } from "../../../components/layout";

import { Link } from "react-router-dom";

const CurrHeader = () => {
  return (
    <CardContainer>
      <h2>Your Progress</h2>
      <p>Course Progress: 3/16</p>
      <h3>Progess Bar Component</h3>
      <Link to="/messages" target="blank">
        yoooo
      </Link>
    </CardContainer>
  );
};

export default CurrHeader;
