import React from "react";
import styled from "styled-components";
import ArrowRight from "../../assets/nav/report_arrow_right.png";
import ArrowLeft from "../../assets/nav/report_arrow_left.png";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <Btn
      onClick={moveSlide}
      btn={direction}
      btnDirection={direction === "next" ? "next" : "prev"}
    >
      {direction === "next" ? (
        <img src={ArrowRight} alt="" />
      ) : (
        <img src={ArrowLeft} alt="" />
      )}
    </Btn>
  );
}

const Btn = styled.button`
  position: absolute;
  top: ${props => (props.btnDirection === "next" ? "50%" : "50%")};
  right: ${props => (props.btn === "next" ? "10px" : "0")};
  left: ${props => (props.btn === "prev" ? "10px" : null)};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  height: 10px;
  background-color: transparent;
  border: transparent;
  cursor: pointer;
  
  img {
    width: 20px;
    height: 20px;
  }
`;
