import React from "react";
import { useState, useRef } from "react";
import CustomSelect from "../../../components/CustomSelect";
import UnitDetailCorrectRate from "./UnitDetailCorrectRate";
import UnitCorrectRate from "./UnitCorrectRate";
import SubjectCorrectRate from "./SubjectCorrectRate";
import styled from "styled-components";
import CardTitle from "../../../components/CardTitle";

const AnswerRate = ({
  option,
  state,
  changeState,
  allSubData,
  allUnitRate,
  detilUnitData,
  setSelectDate,
  setUnitSelector
}) => {
  const optionData = [
    "누적",
    "2022-01",
    "2022-02",
    "2022-03",
    "2022-04",
    "2022-05",
    "2022-06",
    "2022-07",
    "2022-08",
    "2022-09",
    "2022-10",
    "2022-11",
    "2022-12"
  ];

  const [currentFilter, setCurrentFilter] = useState(optionData[0]);

  const BoxSizeRef = useRef();
  const AllContentRef = useRef();

  return (
    <>
      <ContentBox ref={AllContentRef}>
        <Header>
          <HeaderBox>
            <Title>
              <CardTitle
                title={"정답률"}
                first={state}
                second={currentFilter}
              />
            </Title>

            <DivDisplayBox>
              <SelectorBox1>
                <CustomSelect //과목별
                  option={option}
                  state={state}
                  changeState={changeState}
                  width="100px"
                />
              </SelectorBox1>
              {state == "소단원별" ? (
                " "
              ) : (
                <SelectorBox2>
                  <CustomSelect //날짜 & 누적별
                    option={optionData}
                    state={currentFilter}
                    changeState={setCurrentFilter}
                    width="100px"
                  />
                </SelectorBox2>
              )}
            </DivDisplayBox>
          </HeaderBox>
        </Header>

        <>
          {state == "과목별" ? (
            <SubjectCorrectRate
              allSubData={allSubData}
              setSelectDate={setSelectDate}
              currentFilter={currentFilter}
              BoxSizeRef={BoxSizeRef}
              AllContentRef={AllContentRef}
            />
          ) : state == "단원별" ? (
            <UnitCorrectRate
              allUnitRate={allUnitRate}
              setSelectDate={setSelectDate}
              setUnitSelector={setUnitSelector}
              currentFilter={currentFilter}
            />
          ) : (
            <UnitDetailCorrectRate detilUnitData={detilUnitData} />
          )}
        </>
      </ContentBox>
    </>
  );
};

const Title = styled.div`
  display: inline-block;
  @media (max-width: 768px) {
    display: flex;
    margin-left: 5px;
  }
`;

const SelectorBox1 = styled.div`
  margin-right: 32px;
  @media (max-width: 768px) {
    margin: auto;
  }
`;
const SelectorBox2 = styled.div`
  @media (max-width: 768px) {
    margin: auto;
  }
`;

const ContentBox = styled.div`
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: block;
  }
  /* @media (min-width: 330px) {
   margin: auto;
  } */
`;

const Header = styled.header``;

const DivDisplayBox = styled.div`
  display: flex;
  @media (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export default AnswerRate;
