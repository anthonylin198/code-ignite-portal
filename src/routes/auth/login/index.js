import React from "react";
import styled from "styled-components";

import Sidebar from "./Sidebar";
import Main from "./Main";

const Container = styled.div`
  background: #eefcff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
const Wrapper = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`;

const Signup = () => {
  return (
    <Container>
      <Wrapper>
        <Main />
        <Sidebar />
      </Wrapper>
    </Container>
  );
};

export default Signup;
