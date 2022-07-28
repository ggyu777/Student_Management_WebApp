import styled from "styled-components";
import { useState, useEffect } from "react";

const datas = {
  quote: "나는 천천히 가는 사람이다. 그러나 뒤로 가진 않는다.",
  name: "강병석",
  target: 340,
  percent: 84,
  date: "2022/05/09"
};

const Header = () => {
  const [data, setData] = useState(datas);
  useEffect(() => {
    const dateArr = data.date.toString().split("/");
    const date = `${dateArr[0]}년 ${dateArr[1]}월 ${dateArr[2]}일`;
    const datas2 = { ...datas, date };
    setData(datas2);
  }, []);
  return (
    <HEADER>
      <div className="quote">
        <span>오늘의 한줄</span>
        <strong>"{data.quote}"</strong>
      </div>
      <Vl></Vl>
      <div className="score">
        <div className="target">
          <span>{data.name}님의 목표</span>
          <strong>{data.target}</strong>
        </div>
        <div className="graph">
          <div className="graphbar">graphbar</div>
          <span>축하합니다! {data.percent}% 달성하셨어요</span>
        </div>
      </div>
      <Vl></Vl>
      <span>최종 시험응시일</span>
      <strong>{data.date}</strong>
    </HEADER>
  );
};

const HEADER = styled.div`
  font-family: Noto Sans KR;
  background-color: #ffffff;
  height: ${(67 / 982) * 100 + "vh"};
  width: ${(1312 / 1512) * 100 + "vw"};
  padding: 0 ${(20 / 1512) * 100 + "vw"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${(14 / 1512) * 100 + "vw"};
  color: #6a6a6a;
  .quote {
    span {
      margin-right: ${(14.65 / 1512) * 100 + "vw"};
    }
    strong {
      color: #1b1b1b;
      display: inline-block;
      overflow: visible;
    }
  }

  .score {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: ${(342.87 / 1512) * 100 + "vw"};
    .target {
      display: flex;
      align-items: center;
      span {
        margin-right: ${(9.92 / 1512) * 100 + "vw"};
      }
      strong {
        font-size: ${(24 / 1512) * 100 + "vw"};
        font-weight: 500;
        color: #1b1b1b;
      }
    }

    .graph {
      flex-direction: column;
      text-align: center;
      .graphbar {
        width: ${(166 / 1512) * 100 + "vw"};
        background-color: red;
        margin-bottom: 1px;
      }
      span {
        font-size: ${(10 / 1512) * 100 + "vw"};
      }
    }
  }
`;

const Vl = styled.div`
  background-color: #e8e8e8;
  width: ${(3.11 / 1512) * 100 + "vw"};
  height: 2.2575rem;
`;

export default Header;
