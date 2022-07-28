import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import styled from "styled-components";

const GrowthGraph = ({ scoreData, title }) => {
  const score = useRef();
  const scoreText = useRef();
  const [data, setData] = useState("");
  const width = 130;
  const height = 110;
  useEffect(() => {
    setData(scoreData);
    d3.select(score.current).selectAll("*").remove();
    d3.select(scoreText.current).selectAll("*").remove();
    const svg = d3
      .select(score.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => {
        if (i === "NaN") {
          console.log("NAN제발");
        }
        return i * 40 - 10;
      })
      .attr("y", (d, i) => {
        if (i === 0) return null;
        else return height - d + 5;
      })
      .attr("width", "1.3rem")
      .attr("height", (d, i) => {
        if (i === 0) return null;
        else return d;
      })
      .attr("fill", (d, i) => {
        if (i < scoreData.length - 1) {
          return "#D8D8D8";
        } else {
          return "#FFCB60";
        }
      });

    svg
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .attr("x", function (d, i) {
        return i * 40 - 4;
      })
      .attr("y", (d, i) => {
        if (i === 0) {
          return null;
        } else {
          return height - d;
        }
      })
      .attr("font-size", "0.6rem")
      .text((d, i) => {
        if (i === 0) {
          return null;
        } else {
          return d;
        }
      });

    const scoreTexts = d3
      .select(scoreText.current)
      .append("svg")
      .attr("width", width)
      .attr("height", 40);

    scoreTexts
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .attr("x", function (d, i) {
        return 45;
      })
      .attr("y", d => {
        return 25;
      })
      .attr("font-size", "0.9rem")
      .attr("text-anchor", "start")
      .text((d, i) => {
        if (i === 0) {
          return d;
        } else {
          return null;
        }
      });
  });

  return (
    <RankCard>
      <TouchSlideChartBox>
        <Chart ref={score}></Chart>
        <TouchSlideText ref={scoreText}></TouchSlideText>
      </TouchSlideChartBox>
    </RankCard>
  );
};

const RankCard = styled.div`
  display: flex;
  svg {
    display: block;
    font-size: 0.4rem;
    rect {
      ry: 0.3rem;
    }
  }
`;
const TouchSlideChartBox = styled.div`
  margin: 0;
`;

const ChartBox = styled.div`
  margin-right: 1.6rem;
`;

const SpanBox = styled.div`
  width: 4.676rem;
  box-sizing: border-box;
  padding-top: 30px;
`;

const Chart = styled.div`
  svg {
    display: block;
    font-size: 0.4rem;
    rect {
      ry: 0.3rem;
    }
  }
`;

const TouchSlideText = styled.div`
  font-weight: bold;
  svg {
    border-top: 1px solid #000;
  }

  text {
    line-height: 105%;
  }
`;

const Text = styled.div`
  font-weight: bold;
  svg {
    border-top: 1px solid #000;
  }
`;

const SubjectSpan = styled.span`
  font-weight: 700;
  line-height: 203%;
`;

const Span = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.5625rem;
  font-size: 0.875rem;
  font-weight: 500;
`;

const Svg = styled.svg`
  width: 0.625rem;
  height: 0.625rem;
`;

const SmallCircle = styled.circle`
  cx: 0.3125rem;
  cy: 0.3125rem;
  r: 0.3125rem;
`;

export default GrowthGraph;
