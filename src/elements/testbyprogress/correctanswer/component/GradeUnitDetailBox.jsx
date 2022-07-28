import React from "react";
import PrograssBar from "./PrograssBar";

import styled from "styled-components";

const GradeUnitDetailBox = ({ data, idx }) => {
  return (
    <>
      <Li key={idx}>
        <UnitBox>
          <Div>
            <Grade>{idx + 1}위</Grade>
            <SubTitle> {data.FULL_DESCR}</SubTitle>
          </Div>

          <PrograssBar avg={data.avg} color={"#ACD0F5"} />
        </UnitBox>
      </Li>
    </>
  );
};

const Grade = styled.div`
  width: 32px;
  margin-right: 25px;
`;

const SubTitle = styled.div`
  width: 180px;
  line-height: 1.2;
  margin-right: 40px;
  @media (max-width: 768px) {
    text-align: left;
    word-break: nowrap;
    margin-right: 0px;
  }
`;

const UnitBox = styled.div`
  align-items: center;
  padding: 10px;
  display: flex;
  @media (max-width: 768px) {
    display: inline-block;
  }
`;
const Li = styled.li`
  list-style: none;
  margin-bottom: 12px;
`;
const Div = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 8px;
  }
  font-size: 14px;
  font-weight: 700;
  color: #6a6a6a;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default GradeUnitDetailBox;
