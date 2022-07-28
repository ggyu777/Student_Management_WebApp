import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import {
  getLearningTime, 
  getPlaceTime,
} from "../../../hooks/FullTimeFunc.js";

import NewCard from '../../../components/NewCard';
import CustomSelect from '../../../components/CustomSelect';
import GraphWrapper from './GraphWrapper';
import CardTitle from '../../../components/CardTitle';
import SkeletonCircle from '../../skeleton/SkeletonCircle';
import SkeletonBar from '../../skeleton/SkeletonBar';


function FullTime(props) {
  const [learnResult, setLearnResult] = useState([]);
  const [placeResult, setPlaceResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const setLearnResultFunc = async (timeData, formatValue, type) => {
    let result = await getLearningTime(timeData, formatValue, type);
    setLearnResult(result)
  }

  const setPlaceResultFunc = async (timeData, formatValue, type) => {
    let result = await getPlaceTime(timeData, formatValue, type)
    setPlaceResult(result)
  }

  useEffect(() => {
    if(props.timeData.length !== 0){
       //데이터를 가져왔는데 데이터가 있음
      setLoading(true);
      let type = props.grandFilter === "월간" ? "month" : props.grandFilter === "주간" ? "week" : "day";
      setLearnResultFunc(props.timeData, props.formatValue, type);
      setPlaceResultFunc(props.timeData, props.formatValue, type);
      setLoading(false);
    } else if (!props.timeData.length){
      //데이터를 가져왔는데 데이터가 없음
      setLoading(false);
    } else {
      //데이터를 가져오는 중
      setLoading(true);
    }
  }, [props.timeData, props.formatValue])

  // useEffect(() => {
  //   console.log(`loading : ${loading} && props.timeData.length : ${props.timeData.length}`)
  // }, [loading, props.timeData])

  return (
    <>
      <NewCard
        height="auto"
        children={
          loading ? (
            <>
              <SkeletonCircle/>
              <SkeletonBar/>
            </>
          ) 
          : (
            <CardContent>
              <CardHeader>
                <CardTitle
                  title="시간활용"
                  first={props.grandFilter}
                  second={props.grandFilter === "일간" ? props.childFilter.replace("(", " ").replace(")", "요일") : props.childFilter}
                />
                {/* B select */}
                <CustomSelect
                  option={props.childOption}
                  state={props.childFilter}
                  changeState={props.setChildFilter}
                  width={props.grandFilter === "일간" ? "172px" :
                  props.grandFilter === "주간" ? "103px" : "117px"}
                />
              </CardHeader>
              {props.timeData.length ? 
                <GraphWrapper
                learnObj={learnResult}
                placeObj={placeResult}
                currentValue={props.childFilter}
              />
              : <NoDataDiv>
                  해당 데이터가 존재하지 않습니다 🥲
                </NoDataDiv>
              }

            </CardContent>
          )
        }
      />
    </>
  )
}

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  height: auto;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
  @media (min-width: 900px) {
    flex-direction: row;
    margin-bottom: 26px;
  }
`
const NoDataDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
`

export default FullTime;