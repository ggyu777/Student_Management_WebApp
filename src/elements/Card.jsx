import React from "react";
import styled from "styled-components";

const Card = ({ children, width, height, padding }) => {
  return (
    <CardContainer width={width} height={height} padding={padding}>
      {children}
    </CardContainer>
  );
};

export default Card;

export const CardContainer = styled.div`
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
  box-shadow: 0rem 0.5rem 1.375rem -0.375rem rgba(24, 39, 75, 0.12),
    0rem 0.875rem 4rem -0.25rem rgba(24, 39, 75, 0.12);
  border-radius: 1.07rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => props.padding};
  overflow-x: auto;
  overflow-y: hidden;

  @media (max-width: 667px) {
    width: 100%;
  }
`;
