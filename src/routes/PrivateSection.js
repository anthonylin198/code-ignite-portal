import React from "react";
import { Column, Row } from "simple-flexbox";
import { SidebarComponent, SidebarContext } from "../components/sidebar";
import HeaderComponent from "../components/header/HeaderComponent";
import PrivateRoutes from "./PrivateRoutes";

import styled from "styled-components";

import { useLocation } from "react-router-dom";

// components
const StyledRow = styled(Row)`
  height: 100%;
  min-height: 850px;
`;

const StyledColumn = styled(Column)`
  /* height: 100%; */
  margin-left: 255px;
  padding: 30px;
  @media (max-width: 1080px) {
    margin-left: 0;
  }
`;

const StyledBlock = styled.div`
  margin-top: 34px;
`;

// check the route and have conditional rendering

function PrivateSection() {
  // conditional rendering based on react router
  let location = useLocation();
  if (location.pathname.includes("/curriculum/")) {
    return (
      <div>
        <h1>Startup Course Layout</h1>
      </div>
    );
  }
  return (
    <SidebarContext>
      <StyledRow>
        {/* Sidebar */}
        <SidebarComponent />
        <StyledColumn flexGrow={1}>
          <HeaderComponent />
          <StyledBlock>
            <PrivateRoutes />
          </StyledBlock>
        </StyledColumn>
      </StyledRow>
    </SidebarContext>
  );
}

export default PrivateSection;
