import React, { useState, useEffect, useRef, useMemo } from "react";
import styled from "styled-components";
import { dropdown_icon } from "../assets";

export default function CustomSelect({option, state, changeState, width}) {
  const [showOptions, setShowOptions] = useState(false); //셀렉트 옵션 값 보여주기 state
  const toggle = useRef(null);
  const selectRef = useRef(null);

  const onClickFunc = () => {
    setShowOptions(state => !state);
    if(showOptions) toggle.current.style.transform = "rotate(0deg)";
    else toggle.current.style.transform = "rotate(180deg)";
  }

  const handleOnChangeSelectValue = (e) => {
    changeState(e.target.getAttribute("value")); // 셀렉트 선택한 값 가져오기 props로 넘겨받은 currentValue 최신화 왜냐면 해당 자료마다 데이터가 다를거기 때문
  };

  const handleClickOutsideFunc = useMemo(() => {
    return function (e) {
      if (
        selectRef.current &&
        !selectRef.current?.contains(e.target)
      ) {
        toggle.current.style.transform = "rotate(0deg)";
        setShowOptions(false);
      }
    }
  }, [selectRef, toggle])

  useEffect(()=>{
    document.addEventListener("mousedown", handleClickOutsideFunc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideFunc);
    };
  },[selectRef])

  return (
    <div>
    <SelectBox onClick={onClickFunc} width={width} ref={selectRef}>
      <Label height="28px">
        <span>{state}</span>
        <DropDownIcon pt="28" src={dropdown_icon} ref={toggle}/>
      </Label>
      {showOptions &&
        <SelectOptions>
          {option.map((data, i) => {
            // 만약 옵션에 선택된 값이 있으면 해당 값은 option에서 제외
            if (data == state) {
              return;
            } else {
              return (
                <Option key={i} value={data} onClick={handleOnChangeSelectValue}>
                  {data}
                </Option>
              );
            }
          })}
        </SelectOptions>
      }
    </SelectBox>
    </div>
  )
}

const SelectBox = styled.div`
  position: relative;
  top: 0;
  height: 28px;
  width: ${props => props.width}; // 너비는 들어가는 옵션에 따라 달라져야 하므로 props로 주어야 함

  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.0156em;
`

const Label = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => props.height};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: 1px solid #4285F4;
  border-radius: 99px;

  color: #4285F4;
  background-color: #ffffff;
  user-select: none;
  cursor: pointer;

  z-index: 2;

  span {
    margin-right: 4px;
  }
`
const DropDownIcon = styled.img`
  position: absolute;
  right: 10px;
`

const SelectOptions = styled.ul`
  position: relative;
  width: 100%;
  height: auto;
  max-height: calc(calc(24px * 6) + 34px);
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  border: 1px solid #4285F4;
  border-radius: 15px 15px 20px 20px;
  padding: 26px 0 8px 0;
  background-color: #ffffff;
  color: #979797;

  user-select: none;
  cursor: pointer;
  
  z-index: 1;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0px;
    display: none;
  }
`

const Option = styled.li`
  width: 100%;
  margin-top: 4px;

  &:hover {
    color: #4285F4;
  }
  `