import React, {useState, useEffect} from 'react'
import styled from "styled-components";

import LearningPieGraph from '../../graph/LearningPieGraph';
import LearningBarGraph from '../../graph/LearningBarGraph';
import NonLearningBarGraph from '../../graph/NonLearningBarGraph';

function GraphWrapper({learnObj, placeObj, currentValue}) {
  const [check, setCheck] = useState(false);

  useEffect(() => {
    if(learnObj.learn !== undefined && placeObj.realTimeClass !== undefined)
      setCheck(true);
    else setCheck(false);
  }, [learnObj, placeObj])

  return (
    <>
    {check &&
      <GraphWrapperDiv>
        <LearningPieGraph learnObj={learnObj} check={check} />
        <BarGraphWrapper>
          <LearningBarGraph placeObj={placeObj} currentValue={currentValue} />
          <NonLearningBarGraph placeObj={placeObj} currentValue={currentValue} />
        </BarGraphWrapper>
      </GraphWrapperDiv>
    }
    </>
  )
}

export default GraphWrapper;

const GraphWrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.0156em;
  color: #6A6A6A;

  @media (min-width: 900px) {
    flex-direction: row;
  }
  @media (min-width: 1024px) {
    justify-content: space-evenly;
  }
`

const BarGraphWrapper = styled.div`
  width: 266px;
  height: auto;
  margin: 16px 0 16px 0;

  @media (min-width: 768px) {
    width: 582px;
    margin: 32px 0 28px 0;
  }
  @media (min-width: 900px) {
    width: 438px;
    margin: 0 0 20px 0;
  }
`
