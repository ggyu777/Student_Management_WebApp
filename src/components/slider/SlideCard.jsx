import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BtnSlider from "./BtnSlider";
import { GrowthGraph } from "../../elements";
import ArrowUp from "../../assets/arrow_Up_MD.svg";
import ArrowDown from "../../assets/arrow_Down_MD.svg";

export default function SlideCard({
  slice,
  slideIndex,
  nextSlide,
  prevSlide,
  moveDot
}) {
  return (
    <ContainerSlider>
      {slice.map((obj, index) => {
        let { 전월점수, 당월점수, 과목, 시험명 } = obj;

        if (시험명 === "체력측정 결과") {
          전월점수 *= 10;
          당월점수 *= 10;
        }
        if (전월점수 === "N/A") {
          전월점수 = 0;
        }
        if (당월점수 === "N/A") {
          당월점수 = 0;
        }
        const growth = Number(당월점수 - 전월점수);

        const data = [과목, Number(전월점수), Number(당월점수)];
        return (
          <Slider
            key={과목}
            activity={slideIndex === index + 1 ? "active-anim" : null}
          >
            <Increase>
              <span>
                {growth < 0 ? Math.abs(growth) : growth}점{" "}
                {growth < 0 ? "감소" : "증가"}
              </span>
              <img src={growth < 0 ? ArrowDown : ArrowUp} alt="" />
            </Increase>
            <GrowthGraph scoreData={data} title={과목} />
          </Slider>
        );
      })}

      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <ContainerDots>
        {Array.from({ length: slice.length }).map((item, index) => (
          <Dot
            key={index}
            onClick={() => moveDot(index + 1)}
            activity={slideIndex === index + 1 ? "active" : null}
          ></Dot>
        ))}
      </ContainerDots>
    </ContainerSlider>
  );
}

const ContainerSlider = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Increase = styled.div`
  position: absolute;
  top: -10%;
  left: 8%;
  display: flex;
  justify-content: center;
  width: auto;
  height: 11%;
  border: 1px solid #9498ef;
  font-size: 0.775rem;
  text-align: center;
  line-height: 150%;
  box-sizing: border-box;
  border-radius: 93px;
  padding: 0 3px;

  span {
    margin-left: 5px;
  }

  @media (max-width: 992px) {
    display: none;
  }

  @media (max-width: 668px) {
    display: block;
    width: 5.5rem;
    left: 1.2rem;
  }
`;

const Slider = styled.div`
  position: absolute;
  top: 40px;
  left: 28%;
  width: 100%;
  height: 100%;
  opacity: ${props => (props.activity === "active-anim" ? "1" : "0")};
  transition: opacity ease-in-out 0.4s;

  @media (max-width: 667px) {
    left: 40%;
  }
  @media (max-width: 440px) {
    left: 40%;
  }
  @media (max-width: 400px) {
    left: 33%;
  }
`;
const ContainerDots = styled.div`
  position: absolute;
  left: 50%;
  bottom: 10px;
  display: flex;
  transform: translateX(-50%);
`;
const Dot = styled.div`
  background: ${props => (props.activity === "active" ? "#6A6A6A" : "#D8D8D8")};
  width: 10px;
  height: 10px;
  border: 3px solid #f1f1f1;
  border-radius: 50%;
  margin: 0 5px;
`;
