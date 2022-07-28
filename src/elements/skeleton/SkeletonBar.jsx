import React from "react";
import styled from "styled-components";

const SkeletonBar = () => {
  return (
    <Container>
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </Container>
  );
};

export default SkeletonBar;

const Container = styled.div`
  width: 100%;
  height: 13em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Skeleton = styled.div`
  border-radius: 14px;
  width: 90%;
  height: 20px;
  background: #e8e8e8;
  position: relative;
  overflow: hidden;
  border-radius: 14px;

  @keyframes loading {
    0% {
      transform: translateX(0);
    }
    50%,
    100% {
      transform: translateX(810px);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(to right, #e8e8e8, #ddd, #e8e8e8);
    animation: loading 1s infinite linear;
  }

  & + & {
    margin-top: 20px;
  }
`;
