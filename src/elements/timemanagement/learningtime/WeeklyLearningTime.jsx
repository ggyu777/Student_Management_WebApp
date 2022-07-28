import React, { useEffect,useState } from 'react'
import axios from 'axios';
import moment from 'moment';
import ReactApexCharts from "react-apexcharts";
import NewCard from '../../../components/NewCard';
import CompareTwoChart from '../learningtime/CompareTwoChart'
import CompareFourChart from '../learningtime/CompareFourChart';
import CardTitle from '../../../components/CardTitle';
import styled from 'styled-components';

function WeeklyLearningTime(props) {

  const [res, setRes] = useState('')
  const [LRN, setLRN] = useState('')

  useEffect(() => {
    if(props.userData!='')
    setRes(props);
    // console.log(res)
  }, [props]);
  // 단순히 props != '' 를 쓰면 안되고
  // props.userData != '' 를 써야함

  moment.updateLocale('ko', {
    week:{
        dow : 1, // 한 주의 시작 요일은 일요일(0)
        doy: 4 //  연도의 첫 주는 1월 3일을 포함해야 될 경우. (계산 식: 7+dow-3)
      }
  })


  function dateToString(date){
    // date 받아서 '20220604' 이렇게 string으로 반환하는 함수
    let YEAR ='';
    let MONTH ='';
    let DATE ='';

    YEAR = String(date.getFullYear());
    MONTH = date.getMonth()+1;
    if(MONTH <= 9)
    {
      MONTH = '0' + String(MONTH)
    }

    DATE =  date.getDate();
    if(DATE <= 9)
    {
      DATE = '0' + String(DATE)
    }

    let today = YEAR + String(MONTH) + String(DATE);
    return today
  }





  function setUserTime(type){

  let now = new Date();

  let nowDate = new Date();
  let onemonthbeforeDate = new Date(now.getFullYear(),now.getMonth()-1,now.getDate());

    var WeeklySpendingTime = {
      thisWeek:[],
      lastWeek:[],
      beforeLastWeek:[],  
      beforeThreeWeek:[]
    }
    var WeeklyLearningTimeResult = {
      thisWeek:0,
      lastWeek:0,
      beforeLastWeek:0,  
      beforeThreeWeek:0
    }
    var thisWeek = 0;
    var lastWeek = 0;
    var beforeLastWeek = 0;
    var beforeThreeWeek = 0;

    var thisWeekAmount = 0;
    var lastWeekAmount = 0;
    var beforeLastWeekAmount = 0;
    var beforeThreeWeekAmount = 0;

    if(res.userData != undefined)
    {
      let copy = res.userData;
      var weeknumber = moment(`${nowDate.getMonth()+1}-${nowDate.getDate()}-${nowDate.getFullYear()}`).week();
      thisWeek = weeknumber;
      lastWeek = weeknumber-1;
      beforeLastWeek = weeknumber-2;
      beforeThreeWeek= weeknumber-3;

      while(onemonthbeforeDate <= nowDate){
      // 설정한 시간대가 오늘이 될때까지 하루씩 더하면서 값을 집어넣음

      weeknumber = moment(`${nowDate.getMonth()+1}-${nowDate.getDate()}-${nowDate.getFullYear()}`).week();

      let stringDate = dateToString(nowDate);
      //date객체를 string 타입으로 변환

      if(weeknumber==thisWeek)
      WeeklySpendingTime.thisWeek.push(copy.filter(param => (param.TEST_DATE == stringDate && param.TEST_LEARN == type)));
      // console.log(WeeklySpendingTime[setDate.getFullYear()][setDate.getMonth()+1][i])

      else if(weeknumber==lastWeek)
      WeeklySpendingTime.lastWeek.push(copy.filter(param => (param.TEST_DATE == stringDate && param.TEST_LEARN == type)));

      else if(weeknumber==beforeLastWeek)
      WeeklySpendingTime.beforeLastWeek.push(copy.filter(param => (param.TEST_DATE == stringDate && param.TEST_LEARN == type)));

      else if(weeknumber==beforeThreeWeek)
      WeeklySpendingTime.beforeThreeWeek.push(copy.filter(param => (param.TEST_DATE == stringDate && param.TEST_LEARN == type)));
      // 날짜별로 filter 돌려서 WeeklySpendingTime 배열에 넣기

      nowDate.setDate(nowDate.getDate()-1);
      // 하루씩 빼기
    }

      for(let j=0; j< WeeklySpendingTime.thisWeek.length;j++)
      {
        if(WeeklySpendingTime.thisWeek[j][0] != undefined)
        {
          for(let k=0; k<WeeklySpendingTime.thisWeek[j].length;k++){
            WeeklyLearningTimeResult.thisWeek += WeeklySpendingTime.thisWeek[j][k].TEST_HR
            // console.log(WeeklySpendingTime.thisWeek[j][k].HR);
          }
        }
      }
      thisWeekAmount = Math.floor(WeeklyLearningTimeResult.thisWeek)

      for(let j=0; j< WeeklySpendingTime.lastWeek.length;j++)
      {
        if(WeeklySpendingTime.lastWeek[j][0] != undefined)
        {
          for(let k=0; k<WeeklySpendingTime.lastWeek[j].length;k++){
            WeeklyLearningTimeResult.lastWeek += WeeklySpendingTime.lastWeek[j][k].TEST_HR
            // console.log(WeeklySpendingTime.lastWeek[j][k].HR);
          }
        }
      }
      lastWeekAmount = Math.floor(WeeklyLearningTimeResult.lastWeek)


      for(let j=0; j< WeeklySpendingTime.beforeLastWeek.length;j++)
      {
        if(WeeklySpendingTime.beforeLastWeek[j][0] != undefined)
        {
          for(let k=0; k<WeeklySpendingTime.beforeLastWeek[j].length;k++){
            WeeklyLearningTimeResult.beforeLastWeek += WeeklySpendingTime.beforeLastWeek[j][k].TEST_HR
            // console.log(WeeklySpendingTime.beforeLastWeek[j][k].HR);
          }
        }
      }
      beforeLastWeekAmount = Math.floor(WeeklyLearningTimeResult.beforeLastWeek)


      for(let j=0; j< WeeklySpendingTime.beforeThreeWeek.length;j++)
      {
        if(WeeklySpendingTime.beforeThreeWeek[j][0] != undefined)
        {
          for(let k=0; k<WeeklySpendingTime.beforeThreeWeek[j].length;k++){
            WeeklyLearningTimeResult.beforeThreeWeek += WeeklySpendingTime.beforeThreeWeek[j][k].TEST_HR
            // console.log(WeeklySpendingTime.beforeThreeWeek[j][k].HR);
          }
        }
      }
      beforeThreeWeekAmount = Math.floor(WeeklyLearningTimeResult.beforeThreeWeek)

      // console.log(thisWeek,lastWeek,beforeLastWeek,beforeThreeWeek);
      // console.log(WeeklySpendingTime.beforeThreeWeek);
      // console.log("이번주", WeeklyLearningTimeResult.thisWeek);
      // console.log("지난주", WeeklyLearningTimeResult.lastWeek);
      // console.log("2주전", WeeklyLearningTimeResult.beforeLastWeek);
      // console.log("3주전", WeeklyLearningTimeResult.beforeThreeWeek);

      return [thisWeekAmount,lastWeekAmount,beforeLastWeekAmount,beforeThreeWeekAmount]
    }
  }


  return (
    <div>
        <NewCard
        height="auto"
        children=
          {
            <FullCard>
              <div style={{display:"flex",flexDirection: "row"}}>
              <CardTitle title={"시간활용"} first={"주간"} second={"주간종합"} />
              <CardTitle2> 
                주간 학습량 비교
              </CardTitle2>
              </div>
              <Graph>
                {res && <CompareTwoChart weekOrMonth={"주간"} twoWeekData={setUserTime("LRN")}/>}
                <CardTitle3>
                  주간 학습량 비교
                </CardTitle3>
                {res && <CompareFourChart weekOrMonth={"주간"} fourWeekLRNData={setUserTime("LRN")} fourWeekNLNData={setUserTime("NLN")} />}
              </Graph>
            </FullCard>
          }
        />
      </div>

  )
}

const FullCard = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
  height:100%;
`

const Graph = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width:100%;
  height:100%;
  padding: 50px;


  
  @media (max-width: 900px) {
    flex-direction: column;
    padding:0;
  }
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: center;
    align-items:center;
  }
  
`
const CardTitle2 = styled.div`
  width:140%;
  text-align: start;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.0156em;
  color: #00000;

 
  @media (max-width: 768px) {
    display:none;
  }
  @media (min-width: 900px) {
    display:block;
    width:170%;
  }
  @media (min-width: 1024px) {
    width:137%;

  }
  `

const CardTitle3 = styled.div`
  text-align: start;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.0156em;
  color: #00000;

  @media (max-width: 768px) {
  font-size: 14px;
  line-height: 20px;
  margin-top: 22px;
  margin-bottom: 32px;

  }

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 32px;
  }
  @media (min-width: 900px) {
    display:none;
  }
  @media (min-width: 1024px) {
  }
`



export default WeeklyLearningTime