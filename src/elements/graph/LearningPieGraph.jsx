import React from 'react'
import ReactApexChart from 'react-apexcharts';

export default function LearningPieGraph({ learnObj, check }) {
  const ApexChart = () => {
    const state = {
      series: [learnObj.nonLearn, learnObj.learn],
      options: {
        chart: {
          width: 380,
          type: 'pie',
          fontFamily: "Noto Sans KR",
        },
        labels: ['비학습', '학습'],
        responsive: [
        {breakpoint: 768,
          options: {
            chart: {
              width: 265,
            },
            plotOptions: {
              pie: {
                dataLabels: {
                  offset: -22,
                  minAngleToShowLabel: 10,
                },
              }
            },
            legend: {
              itemMargin: {
                horizontal: 15.5,
                vertical: 0,
              },
            },
          },
        },
        {breakpoint: 900,
          options: {
            chart: {
              width: 405,
            },
            plotOptions: {
              pie: {
                dataLabels: {
                  offset: -38,
                  minAngleToShowLabel: 10,
                },
              }
            },
            legend: {
              itemMargin: {
                horizontal: 20,
                vertical: 0
              },
            },
          },
        },
        {breakpoint: 9999,
          options: {
            chart: {
              width: 340,
            },
            plotOptions: {
              pie: {
                dataLabels: {
                  offset: -31,
                  minAngleToShowLabel: 10,
                },
              }
            },
            legend: {
              itemMargin: {
                horizontal: 8,
                vertical: 0
              },
            },
          },
        }],
        plotOptions: {
          pie: {
            startAngle: 0,
            endAngle: 360,
            expandOnClick: false,
            offsetX: 0,
            offsetY: 0,
            dataLabels: {
              offset: -35,
              minAngleToShowLabel: 10,
            },
          }
        },
        dataLabels: {
          style: {
            fontSize: '20px',
            fontWeight: '700',
            fontFamily: 'Roboto',
          },
          dropShadow: {
            enabled: false,
          },
          formatter: function (val) {
            return Math.round(val) + "%"
          },
        },
        colors: ['#F48065', '#4285F4'],
        legend: {
          position: 'bottom',
          fontSize: '10px',
          fontWeight: '400',
          labels: {
            colors: ['#4285F4', '#F48065'],
            useSeriesColors: true
          },
          markers: {
            width: 8,
            height:8,
            offsetX: -4,
            offsetY: -1
          },
          inverseOrder: true,
        },
        tooltip: {
          enabled: false
        },
      },
    }

    return (
      <div id="chart">
      <ReactApexChart options={state.options} series={state.series} type="pie" width={'100%'} />
      </div>
    );
  };

  return (
    <ApexChart />
  );
}

