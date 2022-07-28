import { useRef, useState, useEffect } from "react";
import React from "react";
import ReactApexCharts from "react-apexcharts";
import styled from "styled-components";
import "./DayScoreStyle.scss";

function MonthlyTest(props) {
  const MonthlyCharts = () => {
    const datacopy1 = [...props.MonthlyScoreData];
    const datacopy2 = [...props.MonthlyScoreData];
    const dataLeft = datacopy1.splice(0, 6);
    const dataRight = datacopy2.splice(6, 12);

    const monthcopy1 = [...props.monthList];
    const monthcopy2 = [...props.monthList];
    const monthLeft = monthcopy1.splice(0, 6);
    const monthRight = monthcopy2.splice(6, 12);

    // resize 반응형 이벤트
    const getWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    function userWidth() {
      let [width, setWidth] = useState(getWidth());
      useEffect(() => {
        let timeoutId = null;
        const resizeListener = () => {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => setWidth(getWidth()), 150);
        };
        window.addEventListener("resize", resizeListener);
        return () => {
          window.removeEventListener("resize", resizeListener);
        };
      }, []);

      return width;
    }
    let options = undefined;
    let series = undefined;

    const monthlyStateMax = {
      layout: {
        padding: 15
      },
      series: [
        {
          name: "월평균점수",
          data: props.MonthlyScoreData
        }
      ],
      area: {
        chart: {
          id: "yt",
          group: "social",
          type: "area",
          height: 160,
          toolbar: {
            show: false
          }
        },
        colors: ["#4285F4"],
        xaxis: {
          categories: props.monthList,
          labels: {
            style: {
              colors: "#979797",
              fontSize: "10px",
              fontWeight: 400
            }
          }
        },
        yaxis: {
          labels: {
            offsetX: -10,
            style: {
              colors: "#979797",
              fontSize: "10px",
              fontWeight: 400
            }
          },
          max: 100,
          min: 0,
          tickAmount: 5
        },
        grid: {
          padding: {
            left: 20
          }
        },
        markers: {
          size: 5,
          hover: {
            size: 9
          }
        },
        dataLabels: {
          enabled: true,
          shape: "circle",
          borderRadius: 2,
          y: -10
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.8,
            opacityTo: 0.6,
            stops: [20, 90, 100]
          }
        }
      }
    };
    const monthlyStateMinLeft = {
      series: [
        {
          name: "월평균점수",
          data: dataLeft
        }
      ],
      area: {
        chart: {
          id: "yt",
          group: "social",
          type: "area",
          height: 160,
          toolbar: {
            show: false
          }
        },
        colors: ["#4285F4"],
        xaxis: {
          categories: monthLeft,
          labels: {
            style: {
              colors: "#979797",
              fontSize: "10px",
              fontWeight: 400
            }
          }
        },
        yaxis: {
          labels: {
            offsetX: -10,
            style: {
              colors: "#979797",
              fontSize: "10px",
              fontWeight: 400
            }
          },
          max: 100,
          min: 0,
          tickAmount: 5
        },
        grid: {
          padding: {
            left: 30
          }
        },
        markers: {
          size: 5,
          hover: {
            size: 9
          }
        },
        dataLabels: {
          enabled: true,
          shape: "circle",
          borderRadius: 2,
          y: -10
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.8,
            opacityTo: 0.6,
            stops: [20, 90, 100]
          }
        }
      }
    };

    const monthlyStateMinRight = {
      series: [
        {
          name: "월평균점수",
          data: dataRight
        }
      ],
      area: {
        chart: {
          id: "yt",
          group: "social",
          type: "area",
          height: 160,
          toolbar: {
            show: false
          }
        },
        colors: ["#4285F4"],
        xaxis: {
          categories: monthRight,
          labels: {
            style: {
              colors: "#979797",
              fontSize: "10px",
              fontWeight: 400
            }
          }
        },
        yaxis: {
          labels: {
            offsetX: -10,
            style: {
              colors: "#979797",
              fontSize: "10px",
              fontWeight: 400
            }
          },
          max: 100,
          min: 0,
          tickAmount: 5
        },
        grid: {
          padding: {
            left: 30
          }
        },
        markers: {
          size: 5,
          hover: {
            size: 9
          }
        },
        dataLabels: {
          enabled: true,
          shape: "circle",
          borderRadius: 2,
          y: -10
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.8,
            opacityTo: 0.6,
            stops: [20, 90, 100]
          }
        }
      }
    };

    if (userWidth() < 768) {
      if (props.clickArrow == -1 || props.clickArrow == 0) {
        options = monthlyStateMinLeft.area;
        series = monthlyStateMinLeft.series;
      } else {
        options = monthlyStateMinRight.area;
        series = monthlyStateMinRight.series;
      }
    } else {
      options = monthlyStateMax.area;
      series = monthlyStateMax.series;
    }

    return (
      <div>
        <ReactApexCharts
          options={options}
          series={series}
          type="area"
          width={"100%"}
          height={"222px"}
        />
      </div>
    );
  };

  return <div>{MonthlyCharts()}</div>;
}

export default MonthlyTest;
