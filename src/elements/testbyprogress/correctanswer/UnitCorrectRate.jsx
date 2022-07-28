import React from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";

import styled from "styled-components";
import GradeUnitBox from "./component/GradeUnitBox";
import NoneData from "./NoneData";

const UnitCorrectRate = ({
  // BoxSizeRef,
  allUnitRate,
  setSelectDate,
  setUnitSelector,
  currentFilter
}) => {
  // const ContentSize = useRef(); //내가 원래 갖고 있는 콘텐츠 사이즈

  useEffect(() => {
    setSelectDate(currentFilter);
    if (currentFilter == "누적") {
      setUnitSelector(false);
    } else {
      setUnitSelector(true);
    }
  }, [currentFilter]);

  return (
    <>
      {allUnitRate ? (
        <ContentBox>
          {allUnitRate &&
            Object.values(allUnitRate)?.map((data, idx) => {
              return (
                <Ul>
                  <Li>
                    <SubTitle>{data[0].SUBJECT_NAME}</SubTitle>
                    {data.map((data, idx) => {
                      return <GradeUnitBox data={data} idx={idx} />;
                    })}
                  </Li>
                </Ul>
              );
            })}
        </ContentBox>
      ) : (
        <NoneData />
      )}
    </>
  );
};

const Li = styled.li`
  width: 1200px;
  margin-left: 100px;
  @media (max-width: 1024px) {
    /* background-color: red; */
    margin-left: 0px;
    padding: 10px;
  }
`;

const ContentBox = styled.div``;

const SubTitle = styled.div`
  @media (max-width: 900px) {
    text-align: left;
    margin-bottom: 10px;
    margin-top: 0px;
  }
  @media (max-width: 768px) {
    text-align: center;
  }

  box-sizing: border-box;
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 20px;
  margin-top: 30px;

  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  letter-spacing: -0.0156em;

  color: #6a6a6a;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
`;

export default UnitCorrectRate;
