import styled from "styled-components";

// Card container Equal
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 100%;
  /* this height makes heights equal of parrent */
  height: 100%;
`;

// Card Container with flexible Height - used in the company component so row does not need to be equal
export const CardContainerFlex = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 100%;
`;
