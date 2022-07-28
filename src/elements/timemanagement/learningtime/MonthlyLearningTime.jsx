import React, { useEffect,useState } from 'react'
import axios from 'axios';
import CompareTwoChart from './CompareTwoChart';
import CompareFourChart from './CompareFourChart';
import NewCard from '../../../components/NewCard';
import CardTitle from '../../../components/CardTitle';
import styled from 'styled-components';

function MonthlyLearningTime() {
  const [userData, setUserData] = useState('')
  var flag = false;

  const ResultList = async () => {
    const response = await axios
    .get('https://backend-api-prod.eduhash.net/api/v1/dashboard/moveline?usrSeq=252243&sortTrgt=pstnmsrStrtDt&sortOrd=ASC&pstnmsrDate=2022&offset=0&limit=99999')
    .then(res =>{
      // console.log("시간활용 상세: ",res)
      setUserData(res)
      })
    .catch(err => console.log(err));
  };

  useEffect(() => {
    ResultList();
  }, []);

  let now = new Date();

  
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
    var WeeklySpendingTime = new Object();
    WeeklySpendingTime =
     {
      2022:
        {
          1 : { 1 : [], 2 :[], 3 :[], 4 :[], 5: []} ,
          2 : { 1 :[], 2 :[], 3 :[], 4 :[], 5: []} ,
          3 : { 1 :[], 2 :[], 3 :[], 4 :[], 5: []} ,
          4 : { 1 :[], 2 :[], 3 :[], 4 :[], 5: []} ,
          5 : { 1 :[], 2 :[], 3 :[], 4 :[], 5: []} ,
          6 : { 1 :[], 2 :[], 3 :[], 4 :[], 5: []} ,
          7 : { 1 :[], 2 :[], 3 :[], 4 :[], 5: []} ,
          8 : { 1 :[], 2 :[], 3 :[], 4 :[], 5: []} ,
          9 : { 1 :[], 2 :[], 3 :[], 4 :[], 5: []} ,
          10 : { 1 :[], 2 :[], 3 :[], 4 :[], 5: []} ,
          11 : { 1 :[], 2 :[], 3 :[], 4 :[], 5: []} ,
          12 : { 1 :[], 2 :[], 3 :[], 4 :[], 5: []} 
        },
      2023:
        {
          1 : { 1 :[], 2 :[], 3 :[], 4 :[], 5: []} ,
          2 : { 1 :[], 2 :[], 3 :[], 4 :[], 5: []} ,
          3 : { 1 :[], 2 :[], 3 :[], 4 :[], 5: []} ,
          4 : { 1 :[], 2 :[], 3 :[], 4 :[], 5: []} ,
          5 : { 1 :[], 2 :[], 3 :[], 4 :[], 5: []} ,
          6 : { 1 :[], 2 :[], 3 :[], 4 :[], 5: []} ,
          7 : { 1 :[], 2 :[], 3 :[], 4 :[], 5: []} ,
          8 : { 1 :[], 2 :[], 3 :[], 4 :[], 5: []} ,
          9 : { 1 :[], 2 :[], 3 :[], 4 :[], 5: []} ,
          10 : { 1 :[], 2 :[], 3 :[], 4 :[], 5: []} ,
          11 : { 1 :[], 2 :[], 3 :[], 4 :[], 5: []} ,
          12 : { 1 :[], 2 :[], 3 :[], 4 :[], 5: []} 
        },
      2024:
        {
          1 : { 1 :[], 2 :[], 3 :[], 4 :[], 5: []} ,
          2 : { 1 :[], 2 :[], 3 :[], 4 :[], 5: []} ,
          3 : { 1 :[], 2 :[], 3 :[], 4 :[], 5: []} ,
          4 : { 1 :[], 2 :[], 3 :[], 4 :[], 5: []} ,
          5 : { 1 :[], 2 :[], 3 :[], 4 :[], 5: []} ,
          6 : { 1 :[], 2 :[], 3 :[], 4 :[], 5: []} ,
          7 : { 1 :[], 2 :[], 3 :[], 4 :[], 5: []} ,
          8 : { 1 :[], 2 :[], 3 :[], 4 :[], 5: []} ,
          9 : { 1 :[], 2 :[], 3 :[], 4 :[], 5: []} ,
          10 : { 1 :[], 2 :[], 3 :[], 4 :[], 5: []} ,
          11 : { 1 :[], 2 :[], 3 :[], 4 :[], 5: []} ,
          12 : { 1 :[], 2 :[], 3 :[], 4 :[], 5: []} 
        },
    }

    var WeeklyLearningTimeResult = new Object();
    WeeklyLearningTimeResult = {
      2022:
        {
          1 : { 1 : 0, 2 :0, 3 :0, 4 :0, 5: 0,} ,
          2 : { 1 : 0, 2 :0, 3 :0, 4 :0, 5: 0,} ,
          3 : { 1 : 0, 2 :0, 3 :0, 4 :0, 5: 0,} ,
          4 : { 1 : 0, 2 :0, 3 :0, 4 :0, 5: 0,} ,
          5 : { 1 : 0, 2 :0, 3 :0, 4 :0, 5: 0,} ,
          6 : { 1 : 0, 2 :0, 3 :0, 4 :0, 5: 0,} ,
          7 : { 1 : 0, 2 :0, 3 :0, 4 :0, 5: 0,} ,
          8 : { 1 : 0, 2 :0, 3 :0, 4 :0, 5: 0,} ,
          9 : { 1 : 0, 2 :0, 3 :0, 4 :0, 5: 0,} ,
          10 : { 1 : 0, 2 :0, 3 :0, 4 :0, 5: 0,} ,
          11 : { 1 : 0, 2 :0, 3 :0, 4 :0, 5: 0,} ,
          12 : { 1 : 0, 2 :0, 3 :0, 4 :0, 5: 0,}
        },
      2023:
        {
          1 : { 1 : 0, 2 :0, 3 :0, 4 :0, 5: 0,} ,
          2 : { 1 : 0, 2 :0, 3 :0, 4 :0, 5: 0,} ,
          3 : { 1 : 0, 2 :0, 3 :0, 4 :0, 5: 0,} ,
          4 : { 1 : 0, 2 :0, 3 :0, 4 :0, 5: 0,} ,
          5 : { 1 : 0, 2 :0, 3 :0, 4 :0, 5: 0,} ,
          6 : { 1 : 0, 2 :0, 3 :0, 4 :0, 5: 0,} ,
          7 : { 1 : 0, 2 :0, 3 :0, 4 :0, 5: 0,} ,
          8 : { 1 : 0, 2 :0, 3 :0, 4 :0, 5: 0,} ,
          9 : { 1 : 0, 2 :0, 3 :0, 4 :0, 5: 0,} ,
          10 : { 1 : 0, 2 :0, 3 :0, 4 :0, 5: 0,} ,
          11 : { 1 : 0, 2 :0, 3 :0, 4 :0, 5: 0,} ,
          12 : { 1 : 0, 2 :0, 3 :0, 4 :0, 5: 0,}
        },
      2024:
        {
          1 : { 1 : 0, 2 :0, 3 :0, 4 :0, 5: 0,} ,
          2 : { 1 : 0, 2 :0, 3 :0, 4 :0, 5: 0,} ,
          3 : { 1 : 0, 2 :0, 3 :0, 4 :0, 5: 0,} ,
          4 : { 1 : 0, 2 :0, 3 :0, 4 :0, 5: 0,} ,
          5 : { 1 : 0, 2 :0, 3 :0, 4 :0, 5: 0,} ,
          6 : { 1 : 0, 2 :0, 3 :0, 4 :0, 5: 0,} ,
          7 : { 1 : 0, 2 :0, 3 :0, 4 :0, 5: 0,} ,
          8 : { 1 : 0, 2 :0, 3 :0, 4 :0, 5: 0,} ,
          9 : { 1 : 0, 2 :0, 3 :0, 4 :0, 5: 0,} ,
          10 : { 1 : 0, 2 :0, 3 :0, 4 :0, 5: 0,} ,
          11 : { 1 : 0, 2 :0, 3 :0, 4 :0, 5: 0,} ,
          12 : { 1 : 0, 2 :0, 3 :0, 4 :0, 5: 0,}
        } 
    }

    var MonthlyLearningTimeResult = new Object();
    MonthlyLearningTimeResult =
    {
     1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0
    }
  
    if(userData!='')
    {
      let copy = userData.data.API_RESULT_DATA;
      let firstdate = copy[0].pstnmsrDate;
      let nowMonth = now.getMonth();

      let setDate = new Date(firstdate.substr(0,4),firstdate.substr(4,2),'1');
      setDate.setMonth(setDate.getMonth()-1);
      // console.log(setDate.getMonth())
      // 이게 6월을 뜻함
      let tempMonth = setDate.getMonth();
      
      let i = 1;
      WeeklySpendingTime[setDate.getFullYear()][setDate.getMonth()+1][i] = [];

      while(setDate <= now)
      // 설정한 시간대가 오늘이 될때까지 하루씩 더하면서 값을 집어넣음
      {
        let stringDate = dateToString(setDate);
        //date객체를 string 타입으로 변환

        if(setDate.getDay()==1){
          // 월요일일 경우 주 더하기
            i += 1;
            WeeklySpendingTime[setDate.getFullYear()][setDate.getMonth()+1][i] = [];
          }
        if(tempMonth != setDate.getMonth()+1)
          // 달이 바뀌는 순간 주 초기화
          {
              i = 1;
              tempMonth = setDate.getMonth()+1
              WeeklySpendingTime[setDate.getFullYear()][setDate.getMonth()+1][i] = [];
          }

        // console.log(copy[0].pstnmsrDate,stringDate)

       

        // if(flag)
        {
        // console.log(stringDate)
        WeeklySpendingTime[setDate.getFullYear()][setDate.getMonth()+1][i].push(copy.filter(param => (param.pstnmsrDate == stringDate && param.areaTcd == type)));
          // 날짜별로 filter 돌려서 WeeklySpendingTime 배열에 넣기
        }

        setDate.setDate(setDate.getDate()+1);
          // 하루 추가하기
        // if(copy[0].pstnmsrDate == stringDate)
        {
        flag=true;
        }
      }
      // console.log('2번 api',WeeklySpendingTime[2022][7][2]);
      // console.log(WeeklySpendingTime[2022][7][2][6]) 
      // console.log(parseInt(firstdate.substr(5,1)))
      for(let l=parseInt(firstdate.substr(5,1))-1;l<now.getMonth()+2;l++){
        for(let i=1;i<6;i++){
          for(let j=0;j<WeeklySpendingTime[setDate.getFullYear()][l][i].length;j++){
            for(let k=0;k<WeeklySpendingTime[setDate.getFullYear()][l][i][j].length;k++){
              WeeklyLearningTimeResult[setDate.getFullYear()][l][i] += WeeklySpendingTime[setDate.getFullYear()][l][i][j][k].msrmntTerm            
            }
            // console.log(l+'월', i+'째주',':'+WeeklyLearningTimeResult[setDate.getFullYear()][l][i]);
          }
        }
      }

      for(let j=1;j<13;j++){
        for(let i=1;i<=5;i++){
          MonthlyLearningTimeResult[j] += WeeklyLearningTimeResult[2022][j][i];
          // console.log(WeeklyLearningTimeResult[2022][j][i])
        }
      }

      // console.log('2번 api',WeeklyLearningTimeResult[2022][7][1]);
      // for(let j=1;j<13;j++){
      // console.log(`${j}월 학습시간`, MonthlyLearningTimeResult[j]/3600)
      // }
      return [Math.floor(MonthlyLearningTimeResult[nowMonth+1]/3600),
      Math.floor(MonthlyLearningTimeResult[nowMonth]/3600),
      Math.floor(MonthlyLearningTimeResult[nowMonth-1]/3600),
      Math.floor(MonthlyLearningTimeResult[nowMonth-2]/3600)]
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
              <CardTitle title={"시간활용"} first={"월간"} second={"월간종합"} />
              <CardTitle2> 
                월간 학습량 비교
                </CardTitle2>
              </div>            
              <Graph>
              {userData && <CompareTwoChart weekOrMonth={"월간"} twoWeekData={setUserTime("LRN")}/>}
              <CardTitle3>
                  월간 학습량 비교
              </CardTitle3>
              {userData && <CompareFourChart weekOrMonth={"월간"} fourWeekLRNData={setUserTime("LRN")}  fourWeekNLNData={setUserTime("NLN")} />} 
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

export default MonthlyLearningTime