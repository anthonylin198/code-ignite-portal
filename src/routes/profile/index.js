import React from "react";
import { Column, Row } from "simple-flexbox";

const Profile = () => {
  return (
    <Row horizontal="space-between" breakpoints={{ 768: "column" }}>
      <Column>
        <h1>Profile Component</h1>
        <h1>Summary Component</h1>
        <h1>friends Component</h1>
      </Column>
      <Column breakpoints={{ 768: "column" }}>
        <h1>Your Company Componentttttt</h1>
        <h1>Progress Component</h1>
      </Column>
    </Row>
  );
};

export default Profile;
