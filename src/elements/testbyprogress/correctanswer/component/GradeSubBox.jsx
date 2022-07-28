import React from "react";
import PrograssBar from "./PrograssBar";
import styled from "styled-components";

const GradeSubBox = ({ subData, idx }) => {
  return (
    <Li key={idx}>
      <UnitBox key={idx}>
        <Div>
          <Grade>{idx + 1}위</Grade>
          <SubTitle> {subData.Subtitle}</SubTitle>
        </Div>

        {subData.avg ? (
          <PrograssBar avg={subData.avg} color={"#4285F4"} />
        ) : (
          idx - 1
        )}
      </UnitBox>
    </Li>
  );
};

const Grade = styled.div`
  width: 32px;
  margin-right: 52px;
  @media (max-width: 768px) {
    margin-right: 13px;
    font-size: 12px;
  }
`;

const SubTitle = styled.div`
  text-align: left;
  width: 120px;
  margin-right: 52px;
`;

const UnitBox = styled.div`
  display: flex;
  padding: 0px 20px;

  @media (max-width: 768px) {
    display: inline-block;
  }
`;
const Li = styled.li`
  @media (max-width: 900px) {
    max-width: 600px;
  }
  @media (max-width: 768px) {
    margin-bottom: 3px;
  }

  list-style: none;
  margin-bottom: 32px;
`;
const Div = styled.div`
  @media (max-width: 768px) {
    margin-top: 25px;
    font-size: 15px;
    font-weight: 700;
    color: #6a6a6a;
    display: flex;
  }

  font-size: 16px;
  font-weight: 700;
  color: #6a6a6a;
  display: flex;
`;

export default GradeSubBox;
