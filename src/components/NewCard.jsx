import React from "react";
import styled from "styled-components";

const NewCard = ({ children, height }) => {
  return <CardContainer height={height}>{children}</CardContainer>;
};

export default NewCard;

const CardContainer = styled.div`
  position: relative;
  width: 960px;
  height: ${props => props.height};
  border-radius: 1.07rem;
  border: 1px solid #c8c8c8;
  background-color: white;
  font-family: "Noto Sans KR";
  letter-spacing: -0.0156em;
  justify-content: center;
  align-items: center;
  padding: 32px;

  @media (max-width: 768px) {
    width: 346px;
    flex-direction: column;
    padding: 16px;
    margin: 0 16px 8px;
  }

  @media (max-width: 400px) {
    width: 300px;
    padding: 8px;
    margin: 0 8px 4px;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    width: 736px;
    flex-direction: column;
    padding: 32px;
    margin: 0 auto 32px;
  }
  @media (min-width: 900px) {
    width: 836px;
    flex-direction: row;
    padding: 32px;
    margin: 0 auto 32px;
  }
  @media (min-width: 1024px) {
    width: 960px;
    flex-direction: row;
    padding: 32px;
    margin: 0 auto 32px;
  }
`;
