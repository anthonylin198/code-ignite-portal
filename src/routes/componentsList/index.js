import React from "react";
import { Column, Row } from "simple-flexbox";
import MiniCardComponent from "../../components/cards/MiniCardComponent";
import CardComponent from "../../components/cards/CardComponent";
import styled from "styled-components";

// styled components

const TitleContainer = styled(Row)`
  margin-top: 30px;
`;
const ButtonsContainer = styled(Row)`
  margin-top: 30px;
`;

const ComponentsList = () => {
  return (
    <Column>
      <Row>
        <h1>Mini Cards</h1>
      </Row>
      <ButtonsContainer
        wrap
        flexGrow={1}
        horizontal="space-between"
        breakpoints={{ 768: "column" }}
      >
        <MiniCardComponent value="60" title="lit" />
        <MiniCardComponent value="50" title="lit" />
        <MiniCardComponent value="60" title="lit" />
      </ButtonsContainer>
      <TitleContainer>
        <h1>Card</h1>
      </TitleContainer>
      <Row>
        <ButtonsContainer
          wrap
          flexGrow={1}
          horizontal="space-between"
          breakpoints={{ 768: "column" }}
        >
          <CardComponent value="50" title="lit" items={[1, 2, 3, 4, 5]} />
        </ButtonsContainer>
      </Row>
      <TitleContainer>
        <h1>Buttons</h1>
      </TitleContainer>
    </Column>
  );
};

export default ComponentsList;
