import React from "react";
import styled from "styled-components";

const NewCard2 = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};
export default NewCard2;
const CardContainer = styled.div`
  position: relative;
  width: 960px;
  height: auto;
  border-radius: 1.07rem;
  border: 1px solid #c8c8c8;
  margin: 0 auto 32px;
  background-color: white;
  font-family: "Noto Sans KR";
  letter-spacing: -0.0156em;
  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; */
  padding: ${props => props.padding};
  overflow-x: auto;
  overflow-y: hidden;

  @media (max-width: 768px) {
    width: 346px;
    flex-direction: column;
    padding: 16px;
    margin: 32px 8px 16px;
  }

  @media (max-width: 400px) {
    width: 300px;
    flex-direction: column;
    padding: 8px;
    margin: 32px 8px 16px;
  }

  @media (min-width: 768px) {
    width: 736px;
    flex-direction: column;
    padding: 32px;
  }
  @media (min-width: 900px) {
    width: 836px;
    flex-direction: row;
    padding: 32px;
  }
  @media (min-width: 1024px) {
    width: 960px;
    flex-direction: row;
    padding: 32px;
  }
`;
