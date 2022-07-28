import React, { useMemo } from 'react'
import ReactApexChart from 'react-apexcharts';
import styled from "styled-components";
import moment from "../../hooks/moment.js";

export default function NonLearningBarGraph({ placeObj, currentValue }) {
  const todayFormat = useMemo(() => moment().format("YY년 M월 D일(ddd)"), []);
  const thisMonthFormat = useMemo(() => moment().format("YY년 M월"), []);

  const ApexChart = () => {
    const state = {
      series: [{
        data: [placeObj.meal, placeObj.sleep, placeObj.rest, placeObj.etc],
      }],
      options: {
        chart: {
          type: 'bar',
          fontFamily: "Noto Sans KR",
          toolbar: {
            show: false
          },
          height: 'auto',
        },
        plotOptions: {
          bar: {
            borderRadius: 12.5,
            horizontal: true,
            barHeight: 77,
            distributed: true,
          }
        },
        dataLabels: {
          style: {
            fontSize: '14px',
            fontWeight: '700',
            colors: ["#fff","#fff","#fff","#fff"],
          },
          textAnchor: 'middle',
          dropShadow: {
            enabled: true,
            top: 0,
            left: 0,
            blur: 1,
            color: '#6a6a6a',
            opacity: 0.7
          },
          formatter: function (val) {
            if (val) {
              val = Math.floor(val)
              const hour = Math.floor(val / 60);
              const min = Math.floor(val % 60);
              return `${hour?`${hour}시간`:``} ${min?`${min}분`:``}`;
            }
          },
          offsetY: -2,
        },
        xaxis: {
          categories: ["식사", "수면", "휴식", "기타"],
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: "#979797",
              fontSize: '14px',
              fontWeight: 700,
            },
            offsetY: 4,
          },
        },
        colors: ['#F48065', '#F4806599', '#F480654D', '#C8C8C8'],
        grid: {
          show: false,
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
        },
        legend: {
          show: false,
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          enabled: false
        },
        responsive: [
          {
            breakpoint: 768,
            options: {
              plotOptions: {
                bar: {
                  borderRadius: 11,
                  barHeight: 66,
                }
              },
            }
          },
          {
            breakpoint: 900,
            options: {
              plotOptions: {
                bar: {
                  borderRadius: 11,
                  barHeight: 60,
                }
              },
            }
          },
          {
            breakpoint: 9999,
            options: {
              plotOptions: {
                bar: {
                  borderRadius: 11,
                  barHeight: 72,
                }
              },
            }
          }
        ]
      },
    }
    
      return (
        <ChartWrapper id="chart">
          <NonLearningTitle>{
            currentValue === todayFormat ? "오늘"
            : currentValue === thisMonthFormat ? "이번달"
            : currentValue
          } 비학습량</NonLearningTitle>
          <ApexChartDiv>
            <ReactApexChart options={state.options} series={state.series} type="bar" height={'100%'} />
          </ApexChartDiv>
          <Unit>누적시간</Unit>
        </ChartWrapper>
      );
    };

  return (
    <ApexChart />
  )
}

const ChartWrapper = styled.div`
  position: relative;
  height: 165px;

  @media (min-width: 768px) {
    height: 178px;
  }
  @media (min-width: 900px) {
    height: 155px;
  }
`
const NonLearningTitle = styled.h3`
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
`
const ApexChartDiv = styled.div`
  position: absolute;
  top: 7px;
  left: 10px;
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    top: 8px;
  }
  @media (min-width: 900px) {
    top: 6px;
  }
`
const Unit = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  text-align: right;
  color: #979797;
  user-select: none;
`