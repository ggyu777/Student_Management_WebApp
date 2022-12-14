import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

import "../../styles/map.css"

import defaults from "../../assets/map/map_default.png";
import manDormitory from "../../assets/map/map_man.png";
import womanDormitory from "../../assets/map/map_woman.png";
import health from "../../assets/map/map_health.png";
import clasroom from "../../assets/map/map_class.png";
import self from "../../assets/map/map_self.png";
import track from "../../assets/map/map_track.png";
import restaurant from "../../assets/map/map_restaurant.png";
import etc from "../../assets/map/map_etc.png"
import NewCard from '../../components/NewCard';
import CardTitle from '../../components/CardTitle';
import { dropdown_icon } from '../../assets';

export default function AreaInformation() {

  const pathList = {
    defaults,
    manDormitory,
    womanDormitory,
    health,
    clasroom,
    self,
    track,
    restaurant,
    etc
  }

  const canvasRef = useRef(null);
  const mapRef = useRef(null);
  const toggleRef = useRef(null);
  const [imgPath, setImgPath] = useState(defaults);
  const [showMap, setShowMap] = useState(false);
  
  function moveMap(e){
    setImgPath(pathList[e.target.dataset.place]);

    if(document.querySelector(`.place.on`)){
      document.querySelector(`.place.on`).classList.remove("on")
    }
    document.querySelector(`.place.${e.target.dataset.place}`).classList.add("on")
  }

  const onClickFunc = (e) => {
    setShowMap(!showMap)
    if(!showMap) {
      mapRef.current.style.display = "block";
      toggleRef.current.style.transform = "rotate(180deg)";
    }
    else {
      mapRef.current.style.display = "none";
      toggleRef.current.style.transform = "rotate(0deg)";
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    const image = new Image();
    image.src = imgPath;
    
    image.onload = () => {
    context.canvas.width = image.width;
    context.canvas.height = image.height;

    context?.drawImage(image, 0, 0,  image.width, image.height);
    
  }
  },[canvasRef, imgPath]);

  return (
    <div>
    <NewCard
      height='auto'
      children={
        <div style={{width: "100%", height: "auto"}}>
        <div className='cardHeader' onClick={onClickFunc}>
          <CardTitle title={`${!showMap ? "?????? ??? ?????? ?????????" : "?????? ??? ??????" }`} mapWidth="auto" mapMargin="0" />
          <img className='toggleIcon' src={dropdown_icon} ref={toggleRef}/>
        </div>
        <article id='map' ref={mapRef}>
        <div className='mapSection'>
          <canvas ref={canvasRef} style={{width:"100%", height:"100%"}} />
          <PlaceButton onClick={(e)=> moveMap(e)} data-place="manDormitory" className='manDormitory' />
          <PlaceButton onClick={(e)=> moveMap(e)} data-place="womanDormitory" className='womanDormitory' />
          <PlaceButton onClick={(e)=> moveMap(e)} data-place="restaurant" className='restaurant' />
          <PlaceButton onClick={(e)=> moveMap(e)} data-place="health" className='health' />
          <PlaceButton onClick={(e)=> moveMap(e)} data-place="clasroom" className='clasroom' />
          <PlaceButton onClick={(e)=> moveMap(e)} data-place="self" className='self' />
          <PlaceButton onClick={(e)=> moveMap(e)} data-place="track" className='track' />
          <PlaceButton onClick={(e)=> moveMap(e)} data-place="etc" className='etc' />
        </div>
        
        <p className='mapNotice'>????????? ??????????????? ??????????????? ???????????? ??? ????????????.</p>
  
        <div className='zone'>
          <div className='studyZone'>
            <div className='placeCategory'>
              <h3>????????????</h3>
            </div>
            <ul>
              <li className='place clasroom'>
                <div className="placeIcon">
                  ??????
                </div>
                <p>
                  ????????? 2~4???
                </p>
              </li>
              <li className='place self'>
                <div className="placeIcon">
                  ??????
                </div>
                <p>
                  ????????? (?????? 3~4???)/ ????????? ?????????
                </p>
              </li>
              <li className='place health'>
                <div className="placeIcon">
                  ??????
                </div>
                <p>
                  ????????????
                </p>
              </li>
            </ul>
          </div>
  
          <div className='nonStudyZone'>
            <div className='placeCategory'>
              <h3>???????????????</h3>
            </div>
            <ul>
              <li className='place manDormitory womanDormitory'>
                <div className="placeIcon">
                  ??????
                </div>
                <p>
                ???????????????/ ???????????????
                </p>
              </li>
              <li className='place restaurant'>
                <div className="placeIcon">
                  ??????
                </div>
                <p>
                  ??????
                </p>
              </li>
              <li className='place track'>
                <div className="placeIcon">
                ??????
                </div>
                <p>
                  ???????????? ??????/ ????????????/ ??????/ ?????????/ ?????????/ ????????????/ ????????????
                </p>
              </li>
              <li className='place etc'>
                <div className="placeIcon">
                  ??????
                </div>
                <p>
                  ?????????/ ?????????/ ?????????/ ??????/ ??????/ ?????????/ ?????????/ ????????????/ ????????? ??????/ ?????????/ ??????
                </p>
              </li>
            </ul>
          </div>
        </div>
      </article>
      </div>
      }
    />
    </div>
  )
}

const PlaceButton = styled.button`
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  width: 10.5%;
  height: 6.4%;
  background-color: transparent;
  font-size: 0;
  border: 0;
  cursor: pointer;
  position: absolute;
`

