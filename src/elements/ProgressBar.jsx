import React from "react";
import styled from "styled-components";

const ProgressBar = ({
  bg = "rgba(248, 171, 48, 0.8)",
  cg = "#F8AB30",
  score
}) => {
  return (
    <Container>
      <Progress bg={bg} score={score}>
        <Circle cg={cg}>
          <Span fs="0.625em" ls="1.063em" fw={400}>
            {Math.floor(score * 100)}
          </Span>
          <Span fs="0.375em" ls="1.063em" fw={300}>
            %
          </Span>
        </Circle>
      </Progress>
    </Container>
  );
};

export default ProgressBar;

const Container = styled.div`
  width: 6.75em;
  height: 0.5em;
  background-color: #d8d8d8;
  border-radius: 0.375em;
`;

const Progress = styled.div`
  position: relative;
  width: ${props => props.score * 100}%;
  height: 100%;
  background-color: ${props => props.bg};
  border-radius: 0.375em;
`;

const Circle = styled.div`
  position: absolute;
  right: -1.063em;
  top: -0.531em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5em;
  height: 1.5em;
  background-color: ${props => props.cg};
  border-radius: 7.5em;
  color: white;
`;

const Span = styled.span`
  font-size: ${props => props.fs};
  line-height: ${props => props.ls};
  font-weight: ${props => props.fw};
`;
