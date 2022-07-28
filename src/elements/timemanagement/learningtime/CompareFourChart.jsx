import ReactApexCharts from "react-apexcharts";
import {useState,useEffect} from 'react'
import styled from 'styled-components';

 function CompareFourChart(props) {

  const [timeLabel, setTimeLabel] = useState([])
  const [weekOrMonth, setWeekOrMonth] = useState('')
  const [fourTimeData, setFourTimeData] = useState([])
  let now = new Date();

  useEffect(() => {
    if(props.weekOrMonth!='')
    {setWeekOrMonth(props.weekOrMonth);
      if(props.weekOrMonth=="주간")
      {
        var timelabel = [84,70,56,42,28,14,7]
        setTimeLabel(timelabel);
        setFourTimeData(["이번주","저번주","2주전","3주전"])
      }
      else
      {
        var timelabel = [360,300,240,180,120,60,30]
        setTimeLabel(timelabel);
        setFourTimeData([`${now.getMonth()+1}월`,`${now.getMonth()}월`,`${now.getMonth()-1}월`,`${now.getMonth()-2}월`])
      }
    }
    
  }, [props]);

    
   

    const NLNfilter = props.fourWeekNLNData.map((time) =>
    { if(time>=parseInt(`${timeLabel[0]}`))
      return parseInt(`${timeLabel[0]}`);
      else if (time<=parseInt(`${timeLabel[6]}`))
      return parseInt(`${timeLabel[6]}`);
      else
      return time
    } );

    const LRNfilter = props.fourWeekLRNData.map((time) =>
    { if(time>=parseInt(`${timeLabel[0]}`))
      return parseInt(`${timeLabel[0]}`);
      else if (time<=parseInt(`${timeLabel[6]}`))
      return parseInt(`${timeLabel[6]}`);
      else
      return time
    } );
    
    // console.log(NLN);
    // console.log(NLNfilter);

    // console.log(LRNfilter);

    const FourWeekState = {
      series: [
      {
        name: "학습",
        data: [LRNfilter[3],LRNfilter[2],LRNfilter[1],LRNfilter[0]]
        // data: [LRNfilter[3],LRNfilter[2],LRNfilter[1],LRNfilter[0]]
      },
      {
        name: "비학습",
        data: [NLNfilter[3],NLNfilter[2],NLNfilter[1],NLNfilter[0]]
        // data: [NLNfilter[3],,NLNfilter[2],NLNfilter[1],NLNfilter[0]]
      }
    ],

     area: {
      chart: {
      type: 'line',
      offsetY:-5,
      offsetX:0,
      toolbar: {
        show: false
      },
      tooltip:{
        enabled: false
      },
      
    },
    tooltip:{
      enabled: false
    },
    colors: ['#4285F4', '#F48065'],

    stroke: {
      curve: 'smooth',
      width: 2.5
    },
    fill:{
      opacity:1
    },
    grid: {
      borderColor: '#C8C8C8',
      row: {
        colors: ['#ffffff'], // takes an array which will be repeated on columns
        opacity: 0.6
      },
    
      xaxis: {
        lines: {
            show: true,

        }

    },  

    },
    markers: {
      size: 4,
      colors: '#fff',
      strokeColors: ['#4285F4', '#F48065'], 
      hover: {
        size: undefined,
        sizeOffset: 0
      }
    },

    xaxis: {
    min:1,
     max:4,
     tickAmount:4,
      categories: [`${fourTimeData[3]}`, `${fourTimeData[2]}`, `${fourTimeData[1]}`, `${fourTimeData[0]}`],
      axisTicks:{
        show:false,
        
      },
      axisBorder:{
        show:false
      },
      labels: {
        style: {
          fontFamily:"Noto Sans KR",
          colors: '#6A6A6A',
          fontSize: '10px'
        // 이번주 저번주 밑에 라벨 폰트 스타일
        }
      }
    },
  
    yaxis: {
      min: parseInt(`${timeLabel[6]}`),
      max:parseInt(`${timeLabel[0]}`),
      floating:false,
      tickAmount:6,
      labels: {
        show: true,
        offsetX:-15,
        minWidth: 60,
        maxWidth: 100,
        
        formatter: function(val,index){
          if(index == 6)
          return `${timeLabel[0]}시간 이상`
          if(index == 5)
          return `${timeLabel[1]}시간`
          if(index == 4)
          return `${timeLabel[2]}시간`
          if(index == 3)
          return `${timeLabel[3]}시간`
          if(index == 2)
          return `${timeLabel[4]}시간`
          if(index == 1)
          return `${timeLabel[5]}시간`
          if(index == 0)
          return `${timeLabel[6]}시간 미만`},
          
            style: {
              fontFamily:"Noto Sans KR",
              colors: '#979797',
              fontSize: '10px'
            // 왼쪽 y축 시간 단위 폰트 설정
            }
        },
        
       
        
      
      },
      legend: {
        show:true,
        position: 'top',
        // width:100,
        // height:0,
        horizontalAlign: 'right',
        floating: false,
        offsetY:9,
        fontSize: '10px',
        fontFamily: "Noto Sans KR",
        fontWeight: 600,
        itemMargin: {
          horizontal: 8,
          vertical: 0,
      },
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
      
      },
      responsive: [
        {
         
          breakpoint: 768,
          options: {
            chart:{
              width:270,
              height:250,
              offsetX: -15,
            }
          },
        },
        {
          breakpoint: 900,
          options: {
            chart:{
              width:490,
              height:260,
              offsetX: -65,
              offsetY:0,
            },
          },
        },{
          breakpoint: 1024,
          options: {
            chart:{
              offsetX:20,
              offsetY:18,
            },
          },
        }
      ],
    },
    
    

   
  }
  

  return (
    <GraphWrapper>
      <ReactApexCharts
        series={FourWeekState.series}
        options={FourWeekState.area}
        type="line"
        width={485}
        height={230}
      />
    </GraphWrapper>
  );

};

const GraphWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: start;
  height:100%;
  @media (min-width: 768px) {
    margin: 0 0 40px 0;
  }
  @media (min-width: 1024px) {
    margin: 0 0 0 90px;
  }

`

export default CompareFourChart