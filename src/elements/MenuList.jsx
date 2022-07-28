import { useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import NavToggleList from "./NavToggleList";

const MenuList = ({ children, link, text}) => {
  let a = null;
  switch (link) {
    case "mypage":
      a = "/mypage/main";
      break;
  
    case "report":
      a = "/test";
      break;

    case "time":
      a = "/time";
      break;

    case "health":
      a = "/";
      break;

    case "calendar":
      a = "/mypage/schedule";
      break;

    case "notice":
      a = "/notice/main";
      break;

    default:
      break;
  }
  return (
    <List>
      <a href={a}>
          {text}
      </a>
    </List>
  );
};

const List = styled.li`
  position: relative;
  a{
    display: block;
    font-size:12px;
    font-weight:700;
    padding: 15px 16px;
    line-height: 16px;
    height: 100%;
    font-family: Noto Sans KR;
    color: #fff;
  }

  &:hover{
    background-color: #F8F9FA;
    a{
      color: #4285F4;
    }
  }

  @media (max-width: 768px){
    a{
      color: #4285F4;
      text-align: left;
      padding-left: 56px;
      font-size: 16px;
      line-height: 23px;
    }

    &:hover{
      background-color: #4285F4;
      a{
        color: #fff;
      }
    }
  }
`;

export default MenuList;
