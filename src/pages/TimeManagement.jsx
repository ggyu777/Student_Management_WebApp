import React, { useEffect, useState, useMemo } from 'react'
import styled from 'styled-components';
import axios from 'axios';

import { todayOptionData, weekOptionData, monthOptionData } from "../hooks/FullTimeData.js";
import {
  getToday, 
  getWeeklyNum, 
  getYearMonth, 
} from "../hooks/FullTimeFunc.js" 


import WeeklyLearningTime from '../elements/timemanagement/learningtime/WeeklyLearningTime'
import MonthlyLearningTime from '../elements/timemanagement/learningtime/MonthlyLearningTime'
import AreaInformation from '../elements/timemanagement/AreaInformation'
import FullTime from '../elements/timemanagement/fulltime/FullTime'
import SkeletonBar from '../elements/skeleton/SkeletonBar';
import SkeletonCircle from '../elements/skeleton/SkeletonCircle';
import NewCard from '../components/NewCard.jsx';
import CustomSelect from '../components/CustomSelect'

const currentValueFormatter = (today, type, option, value) => {
  const gap = option.indexOf(value);
  switch(type) {
    case "일간":
      console.log(getToday(gap))
      return getToday(gap);
    case "주간":
      console.log(getWeeklyNum(today, gap))
      return getWeeklyNum(today, gap);
    case "월간":
      console.log(getYearMonth(today, gap))
      return getYearMonth(today, gap);
  }
}

function TimeManagement() {
  const GrandOption = ["일간", "주간", "월간"];
  // const today = useMemo(() => getToday(), []);
  const today= "20220728";

  const [grandFilter, setGrandFilter] = useState(GrandOption[0]);
  const [childOption, setChildOption] = useState(todayOptionData);
  const [childFilter, setChildFilter] = useState(todayOptionData[0])
  
  const [formatData, setFormatData] = useState("");
  const [timeData, setTimeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(grandFilter === "일간"){
      //최초 랜더링 시 effect 방지용
      if(childFilter !== todayOptionData[0]){
        setChildOption(todayOptionData);
        setChildFilter(todayOptionData[0]);
      }
    } else if(grandFilter === "주간"){
      setChildOption(weekOptionData);     
      setChildFilter(weekOptionData[0]);
    } else { //grandFilter === "월간"
      setChildOption(monthOptionData);
      setChildFilter(monthOptionData[0]);
    }
  }, [grandFilter])
  
  useEffect(() => {
    setFormatData(currentValueFormatter(today, grandFilter, childOption, childFilter));
  }, [childOption, childFilter])

  useEffect(() => {
    if(formatData)
      getList();
  }, [formatData])

  const setMonthData = async (usrSeq, formatData, setData) => {
    await axios
    .get(`/mocks/yearData.json`)
    .then(res => {
      setData(res.data.TEST_DATA);
      setLoading(false);
    }).catch((err) => {
      console.log(err);
      setLoading(false);
    })
  }
  
  const setWeekAndDayData = async (usrSeq, setData) => {
    await axios
    .get(`/mocks/monthlyData.json`)
    .then(res => {
      setData(res.data.TEST_DATA);
      setLoading(false);
    }).catch((err) => {
      console.log(err);
      setLoading(false);
    })
  }
  
  const getList = async () => {
    setLoading(true);
    setTimeData([]);    
    const usrSeq = "000";
    if(grandFilter === "월간"){
      setMonthData(usrSeq, formatData, setTimeData);
    }
    else {
      setWeekAndDayData(usrSeq, setTimeData);
    }
  }

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:'center'}}>
      <SelectBox>
        <CustomSelect option={GrandOption} state={grandFilter} changeState={setGrandFilter} width="90px" />
      </SelectBox>
      {loading ? 
        <NewCard
          height="auto"
          children={
            <>
            <SkeletonCircle />
            <SkeletonBar />
            </>
          }
        />
      : 
      <>
        {grandFilter=="주간" && <WeeklyLearningTime userData={timeData} />}
        {grandFilter=="월간" && <MonthlyLearningTime />}  
        <FullTime 
          grandFilter={grandFilter} 
          childOption={childOption} 
          childFilter={childFilter} 
          setChildFilter={setChildFilter} 
          timeData={timeData} 
          formatValue={formatData} 
        />
      </>
      }
      <AreaInformation/>
    </div>
  )
}

const SelectBox = styled.div`
display:flex;
width: 91%;
height: 60px;
justify-content: end;
align-items: center;

@media (min-width: 768px) {
  width: 87%;
}

@media (min-width: 900px) {
  height: 92px;
}
`

export default TimeManagement