import React, { useEffect, useState } from 'react';
import "../../styles/fullcalendar.css";

import closeDetail from "../../assets/closeDetail.png"

function CalendarRight(props) {
    const [viewDetails, setViewDetails] = useState(props.view, props.viewDetail)

    useEffect(()=>{
        setViewDetails(props.view);
    },[props.view])
    if(viewDetails === false){
        return(
            <div className="calenderList">
                    <div className='monthList'>
                        <div className='titleBox'>
                            <p>공식 중요 일정</p>
                        </div>
                        <div>
                            {
                                props.infoList.map((el, index)=>{
                                    let eventCategory = ""
                                    let elClassNames = el.classNames.split(' ');
                                    
                                    if(elClassNames.includes("finalTest")){
                                        eventCategory = "finalTest"
                                    }
                                    else if(elClassNames.includes("monthTest")){
                                        eventCategory = "monthTest"
                                    }
                                    else if(elClassNames.includes("breakTime")){
                                        eventCategory = "breakTime"
                                    }
                                    else if(elClassNames.includes("classOpen")){
                                        eventCategory = "classOpen"
                                    }
                                    else{
                                        eventCategory = "event"
                                    }

                                    let month = ""
                                    if(el.start){
                                        month = parseInt(el.start.split("-")[1])
                                    }
                                    else{
                                        month = parseInt(el.date.split("-")[1])
                                    }

                                    if(month === props.viewMonth){
                                        return(
                                            <div className="monthLi" key={index}>
                                                <div className={`monthTitle ${el.classNames.split(' ').includes("week") ? "week" : "day"} ${eventCategory}`}>{el.title}</div>
                                                <div className='monthContent'>{el.date ? el.date : `${el.start} ~ ${el.end}`}</div>
                                                
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
            </div>
        )
    }
    else{
            const moreYear = new Date(String(props.moreClickDay)).getFullYear();
            const moreMonth = new Date(String(props.moreClickDay)).getMonth() + 1;
            const moreDate = new Date(String(props.moreClickDay)).getDate();
        return(
            
            <div className="calenderList">
                    <div className="detailList">
                        <div className='titleBox'>
                            <button className='closeDetail' onClick={ ()=> props.viewDetail(!viewDetails) }>
                                <img src={closeDetail} alt="" />
                            </button>
                            <p>
                                {moreYear}.
                                {moreMonth}.
                                {moreDate} 
                                <span>{
                                    ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"][new Date(`${moreYear}-${moreMonth}-${moreDate}`).getDay()]
                                }</span>
                            </p>
                        </div>
                        <div>
                            <RightList infoList={[...props.infoList]} details={[...props.details]} view={props.view} />
                        </div>
                    </div>
            </div>
        )
    }
}


function RightList(props){

    const titleList = []
    const matchList = []

    props.infoList.map((arr)=>{
        return titleList.push(arr.title)
    })
    props.details.map((list)=>{
        return matchList.push(list.event._def.title)
    })

    const detailList = matchList.map((ml, index)=>{
        let baseInfo = {
            title: "",
            classNames: ""
        }

        props.infoList.map((el, index) => {
            if (el.title === ml){
                baseInfo = el
                return baseInfo
            }
        })

        let eventCategory = ""
        let baseInfoClassNames = baseInfo.classNames.split(' ');
        
        if(baseInfoClassNames.includes("finalTest")){
            eventCategory = "finalTest"
        }
        else if(baseInfoClassNames.includes("monthTest")){
            eventCategory = "monthTest"
        }
        else if(baseInfoClassNames.includes("breakTime")){
            eventCategory = "breakTime"
        }
        else if(baseInfoClassNames.includes("classOpen")){
            eventCategory = "classOpen"
        }
        else{
            eventCategory = "event"
        }
        return(
            
            <div className='detailLi' key={index}>
                <div className={`detailTitle ${baseInfo.classNames.split(' ').includes("week") ? "week" : "day"} ${eventCategory}`}>{baseInfo.title}</div>
                <div className='detailContent'>{baseInfo.date ? baseInfo.date : `${baseInfo.start} ~ ${baseInfo.end}`}</div>
            </div>
        )
    })

    return(
        <div>
            {
                detailList.map((list)=> list)
            }
        </div>
    )
}


export default CalendarRight