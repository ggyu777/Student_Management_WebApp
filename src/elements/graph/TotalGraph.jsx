import { useRef, useEffect, useState } from "react";
import styled from "styled-components";

import { arc } from "d3";
import * as d3 from "d3";

const TotalGraph = ({ width = 296, grade }) => {
  const total = grade.filter(x => x["과목"] === "TOTAL");
  const { 시험명 } = total[0];

  let 만점 = 500;

  if (grade.length === 4) {
    만점 = 250;
  }

  const 학생총점 = total[0]["당월점수"];
  const 목표점수 = total[0]["당월목표"];
  let 학생등급 = 학생총점 / 만점;
  let 목표등급 = 목표점수 / 만점;

  if (시험명 === "체력측정 결과") {
    학생등급 = (학생총점 * 10) / 만점;
    목표등급 = (목표점수 * 10) / 만점;
  }

  const 달성도 = total[0]["달성도"].split("%")[0];

  const data = {
    studentScore: 학생총점,
    studentGrade: 학생등급,
    targetGrade: 목표등급,
    achievement: 달성도
  };

  const chart = useRef();

  useEffect(() => {
    const outerArc = arc()
      .innerRadius(0.225 * width)
      .outerRadius(0.252 * width)
      .startAngle(0)
      .cornerRadius(50);

    const innerArc = arc()
      .innerRadius(0.156 * width)
      .outerRadius(0.189 * width)
      .startAngle(0)
      .cornerRadius(50);

    d3.select(chart.current).selectAll("*").remove();

    const svg = d3
      .select(chart.current)
      .append("g")
      .attr("transform", `translate(${0.252 * width}, ${0.252 * width})`);

    const numberDOM = svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("font-weight", 700)
      .attr("font-size", "1.59em");

    const backgroundArc = svg
      .append("path")
      .datum({ endAngle: 2 * Math.PI })
      .style("fill", "#F5F5F5")
      .attr("d", outerArc);

    const targetChart = svg
      .append("path")
      .datum({ endAngle: -2 * Math.PI * data.targetGrade })
      .style("fill", "#7C5EF1")
      .transition()
      .duration(750)
      .attrTween("d", function (d) {
        const iChart = d3.interpolate({ endAngle: 0 }, d);
        return function (t) {
          return outerArc(iChart(t));
        };
      });

    const studentChart = svg
      .append("path")
      .datum({ endAngle: -2 * Math.PI * data.studentGrade })
      .style("fill", "#F8AB0D")
      .transition()
      .duration(750)
      .attrTween("d", function (d) {
        const iChart = d3.interpolate({ endAngle: 0 }, d);
        const iText = d3.interpolate(0, Math.floor(data.achievement));
        return function (t) {
          numberDOM.text(d3.format(",d")(iText(t)) + "%");
          return innerArc(iChart(t));
        };
      });
  }, [total]);

  return (
    <GraphContainer width="100%" height="100%">
      <Index>
        <Span>
          <Svg>
            <SmallCircle fill="#7C5EF1" />
          </Svg>
          목표 점수
        </Span>
        <Span>
          <Svg>
            <SmallCircle fill="#F8AB0D" />
          </Svg>
          당월 점수
        </Span>
      </Index>
      <svg
        ref={chart}
        width={150}
        height={150}
        viewBox={`0 0 ${150} ${150}`}
        preserveAspectRatio="xMinYMin meet"
      ></svg>
    </GraphContainer>
  );
};

export default TotalGraph;

const GraphContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;

const Index = styled.div`
  width: 57.55px;
  font-size: 0.75rem;
  font-weight: 500;
  margin-top: 1.68rem;
`;
const Span = styled.span`
  display: flex;
  height: 20px;
  justify-content: space-between;
  align-items: center;
`;

const Svg = styled.svg`
  width: 7.74px;
  height: 7.74px;
`;

const SmallCircle = styled.circle`
  cx: 3.87px;
  cy: 3.87px;
  r: 3.87px;
`;
