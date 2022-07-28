import React, { useEffect, useState,useContext } from 'react'

import "@fullcalendar/react/dist/vdom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "@fullcalendar/core";

import interaction from "@fullcalendar/interaction"
import timeGrid from "@fullcalendar/timegrid";
import CalendarData from "./data/CalendarData"
import "../../styles/fullcalendar.css";
import CalendarRight from "./CalendarRight";

const info = [];
info.push(...CalendarData[String(new Date().getFullYear())]["weeks"])
info.push(...CalendarData[String(new Date().getFullYear())]["days"])


export default function Schedule() {

  const [infos, setInfo] = useState([...info]);
    const [detail, setDetail] = useState([])
    const [viewDetail, setViewDetail] = useState(false);
    const [moreClickDay, setMoreClickDay] = useState({});
    const [viewMonth, setViewMonth] = useState(new Date().getMonth() + 1)
    
    useEffect(function(){
      let monthBtn = document.querySelectorAll(".fc-header-toolbar .fc-button");
      monthBtn.forEach(btn => {
        btn.addEventListener("click",function(){
          if(this.title.includes("Next")){
            if(viewMonth < 12){
              setViewMonth(prev => prev + 1)
            }
          }
          else{
            if(1 < viewMonth){
              setViewMonth(prev => prev - 1)
            }
          }
        })
      })

    }, [])



    return (
      <>
        <div className='calenderBox'>
          <div className="calendar">
            <FullCalendar
              plugins={[ dayGridPlugin, timeGrid ]}
              initialView="dayGridMonth"
              events={[...infos]}
              contentHeight='auto'
              weekNumbers={false}
              editable={true}
              dayMaxEventRows = {true}
              selectable={true}
              selectMirror={true}
              headerToolbar={{
                left: 'prev,next,title',
                right:''
              }}
              views={{
                dayGrid: {
                  dayMaxEventRows: 3
                },
              }}
              moreLinkClick={function(arg){
                arg.jsEvent.nativeEvent.preventDefault();
                setMoreClickDay(arg.date)
                setDetail([...arg.allSegs])
                setViewDetail(prev => !prev)
              }}
              dayCellContent={
                function(arg){
                  return["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"][arg.date.getDate()]
                }
              }
              locale="ko"
              titleFormat= {function(date) {
                return `${date.date.month + 1}월 ${date.date.year}`;
              }}
            />
          </div>
          <CalendarRight infoList={[...infos]} details={[...detail]} view={viewDetail} viewDetail={setViewDetail} viewMonth={viewMonth} moreClickDay={moreClickDay} />
        </div>
      </>
    )
}