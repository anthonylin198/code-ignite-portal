import React from "react";

import { CardContainer } from "../../../components/layout";

const ComponyComponent = () => {
  return (
    <CardContainer>
      {/* conditional rendering - either have the company info or no */}
      <h1>Your Company</h1>
      <h2>Name:</h2>
      <h2>Description:</h2>
      <h2>Stage</h2>
      <h2>Team Members</h2>
      <h2> Status</h2>
    </CardContainer>
  );
};

export default ComponyComponent;
