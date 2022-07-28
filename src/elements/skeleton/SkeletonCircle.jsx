import React from "react";
import styled from "styled-components";

const SkeletonCircle = () => {
  return <Circle />;
};

export default SkeletonCircle;

const Circle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #e8e8e8;
  position: relative;
  overflow: hidden;

  @keyframes loading {
    0% {
      transform: translateX(0);
    }
    50%,
    100% {
      transform: translateX(460px);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(to right, #e8e8e8, #ddd, #f2f2f2);
    animation: loading 1s infinite linear;
  }
`;
