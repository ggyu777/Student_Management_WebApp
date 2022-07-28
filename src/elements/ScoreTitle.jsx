import React from "react";
import styled from "styled-components";

const ScoreTitle = ({ grade }) => {
  const total = grade.filter(x => x["과목"] === "TOTAL");
  return (
    <ScoreContainer>
      총점
      <Score>
        <Text> {total[0]["당월점수"]}</Text>
        <Background />
      </Score>
    </ScoreContainer>
  );
};

export default ScoreTitle;

const ScoreContainer = styled.div`
  display: flex;
  width: 125px;
  height: 33px;
  margin-bottom: 27px;
  font-size: 20px;
  font-weight: 300;
  align-items: center;
  white-space: nowrap;
`;

const Score = styled.div`
  position: relative;
  font-size: 38px;
  font-weight: 500;
  margin-left: 44px;
  display: flex;
  justify-content: center;
`;

const Text = styled.div`
  z-index: 1;
`;

const Background = styled.div`
  position: absolute;
  bottom: 0;
  width: 120%;
  height: 19px;
  background-color: rgba(248, 171, 48, 0.4);
`;
