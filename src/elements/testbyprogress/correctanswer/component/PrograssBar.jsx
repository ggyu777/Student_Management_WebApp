import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const PrograssBar = ({ avg, color }) => {
  const [loading, setLoading] = useState(false);
  const ProgressBarRef = useRef();

  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <ProgressBar className={loading ? "" : "off"}>
      <Progress
        className={"따봉도치야고마워"}
        avg={avg}
        color={color}
        ref={ProgressBarRef}
      >
        {avg && <Avg>{avg}%</Avg>}
      </Progress>
    </ProgressBar>
  );
};

const Avg = styled.span`
  position: absolute;
  top: 3px;
`;

const ProgressBar = styled.div`
  @media (min-width: 769px) {
    width: 500px;
    height: 20px;
    text-align: center;
    border-radius: 0px 14px 14px 0px;
    height: 20px;
    background-color: #e3e3e3;

    font-weight: 600;
    font-size: 0.8rem;
    color: white;
  }


  

  @media (max-width: 768px) {
    width: 232px;
    height: 20px;
    text-align: center;

    border-radius: 0px 14px 14px 0px;

    height: 20px;
    background-color: #e3e3e3;

    font-weight: 600;
    font-size: 0.7rem;
    color: white;
    margin-top: 10px;
  }
`;
const Progress = styled.div`
  border-radius: 0px 8px 8px 0px;
  height: 20px;
  position: relative;
  background-color: ${props => props.color};
  transition: 1s ease;
  width: ${props => props.avg + "%"};
`;

export default PrograssBar;
