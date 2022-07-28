import ReactApexCharts from "react-apexcharts";
import {useState,useEffect} from 'react'
import styled from 'styled-components';


  function CompareTwoChart (props) {
    const [LRN, setLRN] = useState([])
    const [weekOrMonth, setWeekOrMonth] = useState('')

    useEffect(() => {
      // console.log(props)
      if(props.twoWeekData!='')
      setLRN(props.twoWeekData);
      if(props.weekOrMonth!=''){
        if(props.weekOrMonth=="주간")
        {
          setWeekOrMonth("주")
        }
        else
        setWeekOrMonth("달")
        }
      // console.log(LRN)
    }, [props]);

  


    const WeeklyState = {
      series: [
        {
          data: [LRN[1],LRN[0]],
        },

      ],
      area: {
        chart: {
          type: "bar",
          //toolbar 없애는 기능
          toolbar: {
            show: false
          },
          offsetX: -17,
          offsetY: 22,

        },
        colors: ['#D8D8D8','#4285F4'],
        title: {
          text: '[학습량 비교]',
          offsetX: 7,
          align: 'center',
          style: {
            color: '#979797',
            fontWeight:  '400',
            fontFamily: "Noto Sans KR",
            fontSize: '12px'
          // 이번주 저번주 밑에 라벨 폰트 스타일
          }
        },
        grid:{
          show:false
        },

        tooltip:{
          enabled: false
        },
        fill:{
          opacity:1
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '53%',
            // 이게 그래프 width 크기
            borderRadius: 5,
            distributed: true,
            endingShape: 'rounded'
          },
        },

        xaxis: {
          categories: [ `저번${weekOrMonth}`, `이번${weekOrMonth}`],
          axisTicks:{
            show:false,
          },
          axisBorder:{
            show:false
          },
          labels: {
            style: {
              colors: '#6A6A6A',
              fontSize: '13px',
              fontFamily: "Noto Sans KR",
              fontWeight:  '700',
            // 이번주 저번주 밑에 라벨 폰트 스타일
            }
          }
        },

        yaxis: {
          min: 0,
          tickAmount:1,
          //y축 범위를 나타냄

          labels: {
            show: false,
          },
          axisTicks:{
            show:false,
          },
        },
        legend: {
          show: false
        },
        responsive: [
          {
            breakpoint:768,
            options: {
              chart:{
                width:220,
                offsetX: -6,
                offsetY:15,
              },
              plotOptions: {
                bar: {
                  columnWidth: '47%',
                  // 이게 그래프 width 크기
                },
              },
            },
          },
          {
            breakpoint: 900,
            options: {
              chart:{
                width:420,
                offsetX: -6,
                offsetY:15,
              },
              plotOptions: {
                bar: {
                  columnWidth: '40%',
                  // 이게 그래프 width 크기
                },
              },
            }
          },
          {
            breakpoint: 9999,
            options: {
              chart:{
                offsetX: -2,
              },
            }
          },
          
        ],
        dataLabels:{
          style: {
            colors: ["#979797","#FFFFFF"],
            fontSize: '14px',
              fontFamily: "Noto Sans KR",
              fontWeight:  '600',
        },
          formatter: function (val, opt) {
            if (val) {
              val = Math.floor(val)
              const hour = Math.floor(val);
              var result = `${hour?`${hour}시간`:``}` ;
              return result;
            }
          },

        } ,

      }
    };
    return (
      <GraphWrapper>
        <ReactApexCharts
          series={WeeklyState.series}
          options={WeeklyState.area}
          type="bar"
          width="230px"
          height="200px"
        />
      </GraphWrapper>
    );

  };


const GraphWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;

  @media (min-width: 768px) {
    align-items: center;
    height:300px;
  }
 
`



    export default CompareTwoChart
