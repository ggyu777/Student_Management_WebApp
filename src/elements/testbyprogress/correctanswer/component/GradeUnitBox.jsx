import React from "react";
import PrograssBar from "./PrograssBar";
import styled from "styled-components";

const GradeUnitBox = ({ data, idx }) => {
  return (
    data.avg && (
      <Li key={idx}>
        <UnitBox key={idx}>
          <Div>
            <Grade>{idx + 1}위</Grade>
            <SubTitle> {data.INDEX_NAME_LV1}</SubTitle>
          </Div>

          {data.avg ? (
            <PrograssBar avg={data.avg} color={"#58A2EB"} />
          ) : (
            idx - 1
          )}
        </UnitBox>
      </Li>
    )
  );
};

const Grade = styled.div`
  width: 32px;
  margin-right: 40px;
  @media (max-width: 768px) {
    margin-right: 13px;
  }
`;

const SubTitle = styled.div`
  text-align: left;
  box-sizing: border-box;
  width: 80px;
  margin-right: 40px;
  @media (max-width: 768px) {
    margin-right: 0px;
  }
`;

const UnitBox = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: inline-block;
  }
`;
const Li = styled.li`
  padding: 0px 17px;
  list-style: none;
  margin-bottom: 20px;
  @media (max-width: 900px) {
    max-width: 600px;
  }
`;
const Div = styled.div`
  font-weight: 700;
  color: #6a6a6a;
  display: flex;
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  letter-spacing: -0.0156em;

  /* Font Color/캡션 */

  color: #979797;

  @media (max-width: 768px) {
    font-size: 14px;
    font-weight: 700;
    color: #6a6a6a;
    display: flex;
  }
`;

export default GradeUnitBox;
