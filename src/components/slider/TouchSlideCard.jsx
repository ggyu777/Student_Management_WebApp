import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BtnSlider from "./BtnSlider";
import { GrowthGraph } from "../../elements";
import ArrowUp from "../../assets/arrow_Up_MD.svg";
import ArrowDown from "../../assets/arrow_Down_MD.svg";

export default function TouchSlideCard({slice}) {
  return (
    <TouchSlideBigBox>
        <SpanBox>
          <Span>
            <Svg>
              <SmallCircle fill="#D8D8D8" />
            </Svg>
            <span>전월 점수</span>
          </Span>
          <Span>
            <Svg>
              <SmallCircle fill="#FFCB60" />
            </Svg>
            <span>당월 점수</span>
          </Span>
        </SpanBox>
        <TouchSlideBox>
          {slice.map((obj, index) => {
            let { 전월점수, 당월점수, 과목, 시험명 } = obj;

            if (시험명 === "체력측정 결과") {
              전월점수 *= 10;
              당월점수 *= 10;
            }

            const data = [
              과목,
              Math.round(Number(전월점수)),
              Math.round(Number(당월점수))
            ];

            let sliceLength = false;
            if (index >= 5) {
              sliceLength = true;
            }

            return (
              <LittleBox sliceLength={sliceLength} key={과목}>
                <TouchSlide key={과목}>
                  <GrowthGraph scoreData={data} title={과목} screen={true} />
                </TouchSlide>
              </LittleBox>
            );
          })}
        </TouchSlideBox>

        <BtnSlider direction={"next"} />
      </TouchSlideBigBox>
  );
}

const TouchSlideBigBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const TouchSlideBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  margin: auto;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 7px;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d8d8d8;
    border-radius: 5px;
  }
  @media (max-width: 845px) {
  }
`;
const LittleBox = styled.div`
  display: flex;
  margin-left: ${props => (props.sliceLength ? "250px" : "0")};
`;
const TouchSlide = styled.div`
  height: 100%;
  padding-right: 30px;
  margin-bottom: 7px;
`;
const SpanBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
  box-sizing: border-box;
  padding-top: 10px;
  padding-left: 20px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const Span = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 45%;
  height: 20px;
`;

const Svg = styled.svg`
  width: 7.74px;
  height: 7.74px;
`;

const SmallCircle = styled.circle`
  cx: 3.87px;
  cy: 3.87px;
  r: 3.87px;
`;