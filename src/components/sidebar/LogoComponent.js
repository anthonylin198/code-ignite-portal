import React from "react";
import { Row } from "simple-flexbox";
// import { IconLogo } from "../../assets/icons";
import Logo from "../../assets/icons/Logo.png";
// import styled components
import styled from "styled-components";

const LogoContainer = styled(Row)`
  /* margin-left: 32px; */
  margin-right: 32px;
`;

const LogoTitle = styled.span`
  margin-left: 10px;
  color: white;
  font-weight: "bold";
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.3;
`;

const LogoImg = styled.img`
  height: 40px;
  width: auto;
`;

function LogoComponent() {
  return (
    <LogoContainer horizontal="center" vertical="center">
      <LogoImg src={Logo} alt="logo" />
      {/* <IconLogo /> */}
      <LogoTitle>CodeIgnite</LogoTitle>
    </LogoContainer>
  );
}

export default LogoComponent;
