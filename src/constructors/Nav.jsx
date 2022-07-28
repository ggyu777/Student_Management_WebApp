import React, { useState } from "react";
import styled from "styled-components";

import { NaviLogo, NaviLogoColor, menuClose, hamburgerMenu } from "../assets";
import MenuList from "../elements/MenuList";

const Nav = props => {
  const [moMenu, setMoMenu] = useState("");

  const menuBtnFunc = function (e) {
    e.target.classList.value === "menuMo" ? setMoMenu("on") : setMoMenu("");
  };

  return (
    <>
      <Navbar>
        <div className="logoBox">
          <a href="/">
            <img src={NaviLogo} alt="OE.DOT" />
          </a>
        </div>
        <div className={`menu ${moMenu}`}>
          <CloseMenuBtn onClick={e => menuBtnFunc(e)} />
          <ul className="menuBox">
            <MenuList link="mypage" text="마이페이지" />
            <MenuList link="report" text="성적확인" />
            <MenuList link="time" text="시간활용" />
            <MenuList link="health" text="건강상태" />
            <MenuList link="calendar" text="주요일정" />
            <MenuList link="notice" text="공지사항" />
          </ul>
        </div>
        <div className="menuMo" onClick={e => menuBtnFunc(e)}></div>
      </Navbar>
    </>
  );
};

const Navbar = styled.div`
  font-family: Noto Sans KR;
  position: relative;
  width: 100%;
  height: 50px;
  min-height: 50px;
  background: #4285f4;

  .logoBox {
    float: left;
    height: 100%;
    padding-left: 32px;

    @media (max-width: 768px) {
      padding-left: 16px;
    }
    a {
      display: block;
      height: 100%;
      line-height: 40px;
      img {
        vertical-align: middle;
      }
    }
  }

  .menu {
    height: 100%;
    float: right;
    padding-right: 16px;
    position: relative;

    &.on {
      display: block;
    }

    @media (max-width: 768px) {
      display: none;
      padding-right: 0;
      width: 100%;
      height: 100%;
      float: none;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      background-color: #fff;
      &:after {
        content: "";
        display: block;
        width: 68px;
        height: 16px;
        position: absolute;
        bottom: 32px;
        right: 32px;
        background: url(${NaviLogoColor}) no-repeat;
      }
    }
    .menuBox {
      display: flex;
      height: 100%;

      @media (max-width: 768px) {
        display: block;
        height: auto;
        background-color: transparent;
        padding-top: 60px;
        position: relative;
        z-index: 10;
        width: 100%;
      }
    }
  }

  .menuMo {
    display: none;
    @media (max-width: 768px) {
      padding: 25px;
      display: block;
      float: right;
      cursor: pointer;
      background: url(${hamburgerMenu}) no-repeat;
      background-size: 18px 12px;
      background-position: center;
      z-index: 11;
      span {
        width: 18px;
        height: 2.2px;
        display: block;
        margin-bottom: 3px;
        background-color: #fff;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  @media (max-width: 768px) {
    height: 50px;
  }
`;

const CloseMenuBtn = styled.button`
  display: none;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  padding: 0;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    z-index: 100;
    padding: 21px;
    box-sizing: content-box;
    background: url(${menuClose}) no-repeat center;
    width: 14px;
    height: 14px;
  }
`;

export default Nav;
