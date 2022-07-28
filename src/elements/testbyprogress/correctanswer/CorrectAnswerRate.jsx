import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import AnswerRate from "./AnswerRate";
import NewCard2 from "./component/NewCard2";
import Loading from "./Loading";
import SkeletonBar from "../../skeleton/SkeletonBar";
import { allYearDetailUnit } from "./test_data/allYearDetailUnit";
import { allYearSub } from "./test_data/allYearSub";
import { allYearUnit } from "./test_data/allYearUnit";
import { useContext } from "preact/hooks";
import { Context } from "../../../context/Context";
import { takenData } from "./fix_data/api_1";
import { specificTestResults1 } from "./fix_data/api_2";
import { specificUnitTestResults1 } from "./fix_data/api_10";
import { allUnitTestRate } from "./fix_data/api_6";
import { monthUnitCorrectRate } from "./fix_data/api_5";

const CorrectAnswerRate = () => {
  let id = "wnsdn0924";
  let dataLength = 0;
  let setNewIdx = 0;
  // const id = JSON.parse(sessionStorage.getItem("userId"));
  const now = new Date(); // 현재 날짜 및 시간
  const newYear = now.getFullYear();
  const newMonth = now.getMonth() - 1;
  const unitDataArr = [];
  const allYearUnitRateArr = []; //6번..
  const allYearUnitRateNewArr = [];
  const MonthUnitRateArr = []; //5번 한달pai 계산
  let takenSubjectCode = []; //내가 본 과목코드 담을 공간

  const [allSubData, setAllSubData] = useState([]); //1년치 과목 누적
  const [allUnitRate, setAllUnitRate] = useState([]); //1년치 단원 누적
  const [detilUnitData, setDetailUnitData] = useState([]); //소단원
  const optionData = ["과목별", "단원별", "소단원별"];
  const [currentFilter, setCurrentFilter] = useState(optionData[0]);
  const [loading, setLoading] = useState(false);
  const [selectDate, setSelectDate] = useState("누적");
  const [unitSelector, setUnitSelector] = useState(false); //펄스로 바꿔야해 기본값

  //유닛 셀렉터를 두는 이유 =
  //대단원에는 누적 / 월별로 보여주는게 있음
  //셀렉터가 false면 누적을 보여주고 true면 월별로 보여준다.
  //고로 월별을 선택하면 selector는 false로 바뀐다
  //소단은 무조건 누적
  const getData = () => {
    console.log("겟데이터 호출");
    //내가 본 시험 과목들 불러오기
    let subjectArr = []; //가공될 데이터를 담을 배열 만들어줌
    let allYearunitRateArr = []; //6번 api사용
    let allDataArr = takenData.data.DATA; //전체 데이터 모음eepdl
    // const testDate2 = data.RELEASE_DATE_YMD.substr(6, 1);
    if (selectDate == "누적") {
      console.log("?");
      dataLength = allDataArr.length;
      allDataArr.forEach((ele, idx) => {
        getDetailSubject(ele.TEST_NUMBER, subjectArr);
        getUnitCorrectRate(ele.TEST_NUMBER, idx, allYearunitRateArr);
      });
    } else {
      console.log("??");
      const newFilterDataArr = allDataArr.filter((data) => {
        let testDate = data.RELEASE_DATE_YMD.substr(0, 7);
        if (testDate === selectDate) return data;
      });

      newFilterDataArr.length != 0
        ? newFilterDataArr.forEach((ele, idx) => {
            dataLength = newFilterDataArr.length;
            getDetailSubject(ele.EXM_NUMBER, subjectArr);
          })
        : setNull();
    }
  };

  const getDetailSubject = (subjectData, subjectArr) => {
    //3.특정 시험 결과 조회

    let subject = specificTestResults1.data.DATA[0]; //상세 데이터 과목 하나
    subjectArr.push(subject); //만들어준 배열에 넣어주고..
    //이제야 제대로 된.. 내가 원하는! 배열 만들어짐
    if (dataLength == subjectArr.length) {
      if (unitSelector) {
        subjectArr.forEach((ele) => {
          getUnitDetail(
            ele.TEST_NUMBER,
            ele.TEST_ACTUAL_DATE_YMD,
            ele.DESCRIPTION
          );
        });
      }
      //누적 구하려고 준비
      const allSubData = groupArrayOfObjects(subjectArr, "TEST_SUBJECT_CODE");
      const allYearSubArr = calSubAvgFun(allSubData);

      for (const [key, value] of Object.entries(allSubData)) {
        //과목코드로 분류한 객체를 , 단원별로 분류하기 위해 + 평균내주기 위해
        let takenSubObj = { subTitle: value[0].TEST_TITLE, subCode: key };
        takenSubjectCode.push(takenSubObj);
      }

      setAllSubData(allYearSubArr); //일년치 단원 평균
      //완료가 되면 마지막에만 set , 하고 과목코드 다 담겼으니까..
      //소단원 평균내러 ㄲㄱ
      let takenSubCodeLength = takenSubjectCode.length;

      const allYearUnitRareDetail = []; //10번 세부단원pai사용
      takenSubjectCode.forEach((subObj, idx) => {
        getDetailUnitDataGroupBy(
          subObj,
          idx,
          takenSubCodeLength,
          allYearUnitRareDetail
        );
      });
    }
  };

  const getUnitCorrectRate = (testNumber, idx) => {
    //6번 API 누적 과목별 정답률 계산

    const data = allUnitTestRate.data.DATA;
    allYearUnitRateArr.push(...data);
    if (dataLength - 1 == idx) {
      const unitGruopObj = groupArrayOfObjects(allYearUnitRateArr, "INDEX_LV1");
      for (const [key, value] of Object.entries(unitGruopObj)) {
        let unitRateObj = {};
        let sum = value.reduce((a, b) => a + parseInt(b.O_RATE), 0);
        let avg = Math.floor(sum / value.length);
        unitRateObj.avg = avg;
        unitRateObj.TEST_SUBJECT_CODE = value[0].TEST_SUBJECT_CODE;
        unitRateObj.INDEX_LV1 = value[0].INDEX_LV1;
        unitRateObj.INDEX_NAME_LV1 = value[0].INDEX_NAME_LV1;
        unitRateObj.SUBJECT_NAME = value[0].SUBJECT_NAME;
        allYearUnitRateNewArr.push(unitRateObj);
      }
      allYearUnitRateNewArr.sort((a, b) => b.avg - a.avg);
      const SubUnitObj = groupArrayOfObjects(
        allYearUnitRateNewArr,
        "TEST_SUBJECT_CODE"
      );
      setAllUnitRate(SubUnitObj);
    }
  };

  const getUnitDetail = (testNumber, takenDate, subTitle) => {
    console.log("단원별 옳은 답변수!!!!!");
    //5. 단원별 옳은 답변수 + 날짜까지 넣어주기 .. 날짜도 주시지 내가 왜 ...직접 넣어야하죠...

    const newSubjectObj = {
      ...monthUnitCorrectRate.data.DATA[0],
      takenDate,
      subTitle,
    }; //가공된 데이터
    unitDataArr.push(newSubjectObj);
    if (dataLength == unitDataArr.length) {
      console.log(unitDataArr);
      const newUnitDataArr = unitDataArr.filter((data) => {
        console.log(data);
        let testDate = data.takenDate.substr(0, 7);
        if (testDate == selectDate) return data;
      });

      const unitRateObj = groupArrayOfObjects(
        newUnitDataArr,
        "TEST_SUBJECT_INDEX_SUB"
      ); //단원별로 잘라준뒤

      for (const [key, value] of Object.entries(unitRateObj)) {
        let unitRateObj = {};
        let sum = value.reduce((a, b) => a + parseInt(b.O_COUNT), 0);
        let avg = Math.floor(sum / value.length) * 10;
        unitRateObj.avg = avg;
        unitRateObj.TEST_SUBJECT_CODE = value[0].TEST_SUBJECT_INDEX_SUB.substr(
          0,
          2
        );
        unitRateObj.INDEX_NAME_LV1 = value[0].INDEX_NAME_LV1;
        unitRateObj.TEST_SUBJECT_INDEX_SUB = key;
        unitRateObj.SUBJECT_NAME = value[0].subTitle;
        MonthUnitRateArr.push(unitRateObj);
        //평균을 내주고 과목코드 객체를 합해서 새로운 배열을 만들어준다.
      }
      const monthUnitCorrectRate = groupArrayOfObjects(
        MonthUnitRateArr,
        "TEST_SUBJECT_CODE"
      ); //새로운 배열을 그룹바이 해주면 과목 => 단원별로 묶여진다.

      setAllUnitRate(monthUnitCorrectRate);
      setLoading(true);
    }
  };

  const getDetailUnitDataGroupBy = (
    subObj,
    idx,
    takenSubCodeLength,
    allYearUnitRareDetail
  ) => {
    setNewIdx = idx;

    const unitDetailDataArr = specificUnitTestResults1.data.DATA;

    allYearUnitRareDetail.push(
      {
        subTitle: subObj.subTitle,
        TEST_SUBJECT_CODE: subObj.subCode,
      },
      ...unitDetailDataArr
    );

    if (setNewIdx == takenSubCodeLength - 1) {
      allYearUnitRareDetail.forEach((unitData) => {
        for (const [key, value] of Object.entries(unitData)) {
          if (key == "TEST_SUBJECT_INDEX") {
            unitData.TEST_SUBJECT_INDEX_GROUP = value.substr(0, 5);
          }
        }
        const testAvg = calAvg(unitData.MY_O_COUNT, unitData.MY_TOTAL_COUNT);
        unitData.avg = testAvg;
      });
      const unitGroupObj = groupArrayOfObjects(
        allYearUnitRareDetail,
        "TEST_SUBJECT_CODE"
      );

      for (const key in unitGroupObj) {
        unitGroupObj[key] = unitGroupObj[key].sort((a, b) => {
          if (!a.avg) a.avg = 0;
          if (!b.avg) b.avg = 0;
          return b.avg - a.avg;
        });
      }

      setDetailUnitData(unitGroupObj);
      setLoading(true);
    }
  };

  useEffect(() => {
    getData();
  }, [selectDate, unitSelector]);

  //내가 만들어놓은 함수 모음
  const calSubAvgFun = (obj) => {
    console.log("함수");
    const subCalAvgArr = [];
    for (const [key, value] of Object.entries(obj)) {
      //과목코드로 분류한 객체를 , 단원별로 분류하기 위해 + 평균내주기 위해
      // takenSubjectCode.push(key); //내가 보 ㄴ과목코드만 따로 분류
      let sum = value.reduce((a, b) => a + parseInt(b.TEST_SUBJECT_POINT), 0);
      let avg = Math.floor(sum / value.length);
      let subAvgArr = {
        subCode: key,
        avg: avg,
        Subtitle: value[0].DESCRIPTION,
      };
      subCalAvgArr.push(subAvgArr);
    }
    return subCalAvgArr;
  };

  const setNull = () => {
    setAllSubData("");
    setAllUnitRate("");
    setLoading(true);
  };

  const calAvg = (myOcount, myTotalCount) => {
    return Math.floor((myOcount / myTotalCount) * 100);
  };

  const groupArrayOfObjects = (list, key) => {
    return list.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  return (
    <div>
      <NewCard2 width={"44em"} padding={"2em"}>
        {loading ? (
          <AnswerRate
            option={optionData} //셀렉터를 위해
            state={currentFilter} //셀렉터를 위해
            changeState={setCurrentFilter} //셀렉터를 위해
            allSubData={allSubData} //데이터
            allUnitRate={allUnitRate} //데이터
            detilUnitData={detilUnitData} //데이터
            setSelectDate={setSelectDate} //월별선택으로 데이터 받아오기
            setUnitSelector={setUnitSelector} // 누적 & 월별 선택
            unitSelector={unitSelector} //누적 & 월별 선택
          />
        ) : (
          <>
            <Loading />
            <SkeletonBar />
          </>
        )}
      </NewCard2>
    </div>
  );
};
export default CorrectAnswerRate;
