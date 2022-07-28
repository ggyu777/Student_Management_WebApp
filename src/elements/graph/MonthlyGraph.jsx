import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import * as d3 from "d3";
function convertMonth(string) {
  switch (string) {
    case "Jan":
      return "01";
      break;
    case "Feb":
      return "02";
      break;
    case "Mar":
      return "03";
      break;
    case "Apr":
      return "04";
      break;
    case "May":
      return "05";
      break;
    case "Jun":
      return "06";
      break;
    case "Jul":
      return "07";
      break;
    case "Aug":
      return "08";
      break;
    case "Sep":
      return "09";
      break;
    case "Oct":
      return "10";
      break;
    case "Nov":
      return "11";
      break;
    case "Dec":
      return "12";
      break;
  }
}
const arr = [
  { date: 202106, totalScore: 250 },
  { date: 202107, totalScore: 255 },
  { date: 202108, totalScore: 250 },
  { date: 202109, totalScore: 265 },
  { date: 202110, totalScore: 280 },
  { date: 202111, totalScore: 295 },
  { date: 202112, totalScore: 270 },
  { date: 202201, totalScore: 310 },
  { date: 202202, totalScore: 320 },
  { date: 202203, totalScore: 310 }
];

const MonthlyGraph = () => {
  const today = new Date();
  const todayARR = String(today).split(" ");
  const thisYEAR = Number(todayARR[3]);
  const thisMONTH = convertMonth(todayARR[1]);
  let scoreList = [];
  for (let i = 0; i < 12; i++) {
    let obj = new Object();
    if (thisMONTH - i <= 0) {
      if (12 + (thisMONTH - i) < 10) {
        obj.date = Number(`${thisYEAR - 1}0${12 + (thisMONTH - i)}`);
      } else {
        obj.date = Number(`${thisYEAR - 1}${12 + (thisMONTH - i)}`);
      }
    } else {
      if (thisMONTH - i < 10) {
        obj.date = Number(`${thisYEAR}0${thisMONTH - i}`);
      } else {
        obj.date = Number(`${thisYEAR}${thisMONTH - i}`);
      }
    }
    obj.totalScore = 0;
    arr.forEach(d => {
      if (d.date === obj.date) {
        obj.totalScore = d.totalScore;
      }
    });
    scoreList.push(obj);
  }

  const [data, setData] = useState(scoreList.reverse());
  const chart = useRef();
  useEffect(() => {
    let max = 0;
    data.forEach(d => {
      if (d.totalScore > max) max = d.totalScore;
    });
    let w = 540;
    const h = 200;
    const xScale = d3
      .scaleBand() // 균일한 band(묶음, 단)으로 연속 range를 나눔
      .domain(d3.range(data.length)) // 스케일에 대한 입력 domain 설정(dataset길이만큼 범위를 설정)
      .rangeRound([0, w]) // range의 반올림을 허용
      .paddingInner(0.6); // 각 막대 사이의 공간
    const yScale = d3
      .scaleLinear()
      .domain([0, 350]) // 입력 domain 상단을 데이터셋에서 가장 큰 데이터 값으로 설정
      .range([0, h]);
    const svg = d3
      .select(chart.current)
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .attr("viewbox", `0 0 ${w} ${h}`);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => xScale(i))
      .attr("y", d => h)
      .attr("width", xScale.bandwidth())
      .attr("height", d => 0);
    svg
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .attr("x", (d, i) => xScale(i))
      .attr("y", d => h)
      .text(0);

    svg
      .selectAll("text")
      .transition()
      .duration(100)
      .attr("y", d => h - (1 - (350 - d.totalScore) / 350) * h)
      .text(d => d.totalScore)
      .delay((d, i) => {
        return i * 500;
      });
    svg
      .selectAll("rect")
      .transition()
      .duration(3000)
      .delay((d, i) => i * 100)
      .attr("y", d => h - yScale(d.totalScore) + 3)
      .attr("height", d => yScale(d.totalScore))
      .attr("fill", (d, i) => {
        if (i === data.length - 1) {
          return "#F8AB0D";
        } else {
          return "#d8d8d8";
        }
      });

    svg.append("g").attr("className", "x-axis");
    const xAxis = d3.axisBottom(xScale);
    svg.select(".x-axis").style("transform", "translateY(150pxsss").call(xAxis);
  }, []);

  return <Chart ref={chart}></Chart>;
};

const Chart = styled.div`
  svg {
    margin: 2rem;
    rect {
      ry: 0.3rem;
    }
    text {
      font-size: 0.5rem;
    }
  }
`;

export default MonthlyGraph;
