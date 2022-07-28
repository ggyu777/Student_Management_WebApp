import axios from "axios";
import React, { Component } from "react";
import { useEffect, useState } from "react";
import "./DayScoreStyle.scss";
import LeftButton from "../../../assets/left.png";
import RightButton from "../../../assets/right.png";
import SkeletonBar from "../../skeleton/SkeletonBar";
import Loading from "../correctanswer/Loading";
import NewCard from "../../../components/NewCard";
import MonthlyTest from "./MonthlyTest";

function TestScore() {
  const [dataSort, setDataSort] = useState({}); //월별로 나눈 데이터
  const [MonthlyScoreData, setMonthlyScoreData] = useState();
  const [monthList, setMonthList] = useState();
  const [clickArrow, setClickArrow] = useState(0);
  const [loading, setLoading] = useState(false);

  NewCard;

  const resultListData = async () => {
    try {
      let id = "wnsdn0924";
      let month = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
      let copy = {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: [],
        10: [],
        11: []
      };
      const response = await axios.get(`/api/v1/report/result-list/${id}`);
      const resultList = response.data.DATA;

      month.map(arr => {
        resultList.map(arr2 => {
          const date = new Date(arr2.EXM_ACTUAL_DATE_YMD);
          if (date.getMonth() == arr) {
            return copy[arr].push(arr2);
          }
        });
      });

      setDataSort(copy);
      let scoreCode = [];
      let monthlist2 = [];
      let monthindex = [];
      const responseScore = month.map((arr, i) => {
        if (!copy[i][0] === false) {
          scoreCode.push(copy[i][0].EXM_NUMBER);
          const monthDate = new Date(copy[i][0].EXM_ACTUAL_DATE_YMD);
          const monthDatelist = monthDate.getMonth() + 1;
          monthlist2.push(`22년 ${monthDatelist}월`);
          monthindex.push(i);
        } else {
          monthlist2.push(`22년 ${i + 1}월`);
          return;
        }
      });

      const monthlist = [];
      let MonthlyScoreCopy = [];
      scoreCode.map(arr => {
        const monthDate = arr.toString();
        const monthDatelist = monthDate.substring(4, 6);
        monthlist.push(`22년 ${monthDatelist}월`);
      });

      setMonthList(monthlist2);

      const maping = () =>
        scoreCode.reduce((previous, current, currentIndex) => {
          return previous.then(async () => {
            const res = await axios.get(
              `/api/v1/report/average-score-by-month/${current}/${id}`,
              current
            );
            MonthlyScoreCopy.push(res.data.DATA[0].THIS_MONTH_AVERAGE);
          });
        }, Promise.resolve());

      const reducing = async () => {
        await maping();
        let monthFilter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        monthFilter.splice(
          monthindex[0],
          monthindex[0] + Number(monthindex.length),
          ...MonthlyScoreCopy
        );
        setMonthlyScoreData(monthFilter);
        setLoading(true);
      };

      reducing();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    resultListData();
  }, []);

  const handlerArrowClickLeft = () => {
    setClickArrow(-1);
  };

  const handlerArrowClickRight = () => {
    setClickArrow(1);
  };

  return (
    <div className="card_wrapper">
      {loading ? (
        <NewCard
          height="auto"
          style={{ overflowX: "none", overflowY: "none" }}
          children={
            <div className="daily_test_card">
              <div className="subtitle_wrapper">
                <h2 className="subtitle_text">월간 성적추이</h2>
              </div>
              <div className="card_content_wrapper">
                <div className="card_slider_wrapper">
                  <div
                    className="card_slider_left"
                    onClick={handlerArrowClickLeft}
                  >
                    <img className="card_slider_left" src={LeftButton}></img>
                  </div>
                  <div
                    className="card_slider_right"
                    onClick={handlerArrowClickRight}
                  >
                    <img className="card_slider_right" src={RightButton}></img>
                  </div>
                </div>
                <div className="card_content">
                  {MonthlyScoreData && (
                    <MonthlyTest
                      monthList={monthList}
                      MonthlyScoreData={MonthlyScoreData}
                      clickArrow={clickArrow}
                    />
                  )}
                </div>
              </div>
            </div>
          }
        ></NewCard>
      ) : (
        <NewCard height="auto" style={{ overflowX: "none", overflowY: "none" }}>
          <>
            <Loading />
            <SkeletonBar />
          </>
        </NewCard>
      )}
    </div>
  );
}

export default TestScore;
